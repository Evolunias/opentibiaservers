#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images', 'featured-items');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Track all found URLs
const urlMap = new Map(); // URL -> { localPath, itemName, type }
let downloadedCount = 0;
let failedCount = 0;
const failedUrls = [];

/**
 * Extract all cdn.builder.io URLs from the codebase
 */
function findAllBuilderUrls() {
  console.log('🔍 Scanning codebase for cdn.builder.io URLs...\n');
  
  const sourceFiles = [
    'app/components/FeaturedItems.jsx',
    'app/talents/TalentTree.jsx',
  ];

  sourceFiles.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find all cdn.builder.io URLs
    const urlRegex = /https:\/\/cdn\.builder\.io\/api\/v1\/image\/assets[^'"\s)]+/g;
    const matches = content.match(urlRegex) || [];

    // Deduplicate and track
    matches.forEach(url => {
      if (!urlMap.has(url)) {
        urlMap.set(url, {
          file,
          found: false
        });
      }
    });

    if (matches.length > 0) {
      console.log(`✓ Found ${matches.length} URL(s) in ${file}`);
    }
  });

  console.log(`\n📊 Total unique URLs found: ${urlMap.size}\n`);
  return urlMap;
}

/**
 * Download a single image file
 */
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, `${filename}.webp`);
    const file = fs.createWriteStream(filepath);

    https.get(url, { 
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

/**
 * Generate a unique filename based on the URL hash
 */
function generateFilename(url, index) {
  // Extract the asset ID from the URL
  const match = url.match(/assets%2F([a-f0-9]+)%2F([a-f0-9]+)/);
  if (match) {
    return `featured-item-${match[2].substring(0, 8)}`;
  }
  return `featured-item-${index}`;
}

/**
 * Download all images
 */
async function downloadAllImages() {
  console.log('⬇️  Downloading images...\n');

  const urls = Array.from(urlMap.keys());
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const filename = generateFilename(url, i);

    try {
      await downloadFile(url, filename);
      const localPath = `/images/featured-items/${filename}.webp`;
      
      urlMap.set(url, {
        ...urlMap.get(url),
        filename,
        localPath,
        found: true
      });

      downloadedCount++;
      console.log(`  [${downloadedCount}/${urls.length}] ✓ ${filename}.webp`);
    } catch (err) {
      failedCount++;
      failedUrls.push({ url: url.substring(0, 80) + '...', error: err.message });
      console.log(`  [${i + 1}/${urls.length}] ✗ Failed: ${err.message}`);
    }
  }

  console.log('');
  return downloadedCount > 0;
}

/**
 * Update all source files with new local paths
 */
function updateSourceFiles() {
  console.log('♻️  Updating source files with local paths...\n');

  const filesToUpdate = [
    'app/components/FeaturedItems.jsx',
    'app/talents/TalentTree.jsx',
  ];

  let updatedFiles = 0;

  filesToUpdate.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let fileUpdated = false;

    urlMap.forEach((data, url) => {
      if (data.localPath && content.includes(url)) {
        content = content.replaceAll(url, data.localPath);
        fileUpdated = true;
      }
    });

    if (fileUpdated) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedFiles++;
      console.log(`  ✓ Updated ${file}`);
    }
  });

  console.log(`\n✓ Updated ${updatedFiles} files\n`);
  return updatedFiles > 0;
}

/**
 * Verify all URLs have been replaced
 */
function verifyAllUrlsReplaced() {
  console.log('🔐 Verifying all external URLs have been replaced...\n');

  const filesToCheck = [
    'app/components/FeaturedItems.jsx',
    'app/talents/TalentTree.jsx',
  ];

  let remainingUrls = [];

  filesToCheck.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf-8');
    const urlRegex = /https:\/\/cdn\.builder\.io\/api\/v1\/image\/assets[^'"\s)]+/g;
    const matches = content.match(urlRegex) || [];

    if (matches.length > 0) {
      remainingUrls.push({ file, count: matches.length });
    }
  });

  if (remainingUrls.length === 0) {
    console.log('✓ All cdn.builder.io URLs have been successfully replaced!\n');
    return true;
  } else {
    console.log('⚠️  Found remaining external URLs:\n');
    remainingUrls.forEach(({ file, count }) => {
      console.log(`  - ${file}: ${count} URL(s)`);
    });
    console.log('');
    return false;
  }
}

/**
 * Create a mapping file for reference
 */
function createMappingFile() {
  const mapping = {};
  urlMap.forEach((data, url) => {
    if (data.localPath) {
      mapping[url] = data.localPath;
    }
  });

  const mappingPath = path.join(projectRoot, 'scripts', 'image-localization-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log('📋 Mapping file created: scripts/image-localization-mapping.json\n');
}

/**
 * Main execution
 */
async function main() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   Image Localization Script - Download & Replace      ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  try {
    // Step 1: Find all URLs
    findAllBuilderUrls();

    if (urlMap.size === 0) {
      console.log('✓ No cdn.builder.io URLs found. Your repository is already clean!\n');
      process.exit(0);
    }

    // Step 2: Download images
    const downloaded = await downloadAllImages();

    if (!downloaded) {
      console.log('⚠️  No images were downloaded. Please check your internet connection.\n');
      process.exit(1);
    }

    // Step 3: Update source files
    updateSourceFiles();

    // Step 4: Verify
    const verified = verifyAllUrlsReplaced();

    // Step 5: Create mapping file
    createMappingFile();

    // Summary
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('📊 SUMMARY:\n');
    console.log(`   ✓ Downloaded:    ${downloadedCount} images`);
    if (failedCount > 0) {
      console.log(`   ✗ Failed:        ${failedCount} images`);
      console.log('\n   Failed downloads:');
      failedUrls.forEach(({ url, error }) => {
        console.log(`     - ${url} (${error})`);
      });
    }
    console.log(`   📁 Location:     public/images/featured-items/`);
    console.log(`   ✓ Status:        ${verified ? 'ALL COMPLETE' : 'REVIEW NEEDED'}`);
    console.log('\n═══════════════════════════════════════════════════════\n');

    if (verified && failedCount === 0) {
      console.log('🎉 SUCCESS! All images have been downloaded and localized.\n');
      console.log('Next steps:');
      console.log('  1. Review the changes in your files');
      console.log('  2. Test the application to ensure images load correctly');
      console.log('  3. Commit and push the changes\n');
      process.exit(0);
    } else {
      console.log('⚠️  MANUAL REVIEW REQUIRED\n');
      console.log('Some issues were encountered. Please review the output above.\n');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Fatal error:', err.message);
    process.exit(1);
  }
}

main();
