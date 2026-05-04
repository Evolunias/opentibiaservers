#!/usr/bin/env node

/**
 * Comprehensive Image Localization Script
 * 
 * This script:
 * 1. Scans entire codebase for external image URLs
 * 2. Downloads all external images locally
 * 3. Creates a mapping file for URL replacement
 * 4. Updates all source code references
 * 5. Verifies no external URLs remain
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(__dirname);

// Configuration
const CONFIG = {
  imageDir: path.join(projectRoot, 'public', 'images', 'downloaded'),
  appDir: path.join(projectRoot, 'app'),
  sourceFiles: ['**/*.jsx', '**/*.js', '**/*.json'],
  externalUrlPatterns: [
    /https?:\/\/cdn\.builder\.io\/api\/v1\/image\/assets%2F[^\s"'`<>)}\?]*(?:\?[^\s"'`<>)}\]]*)?/g,
  ],
};

// Utilities
async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { redirect: 'follow' }, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      resolve(res);
    }).on('error', reject);
  });
}

async function saveImage(url, filePath) {
  try {
    const response = await downloadImage(url);
    await pipeline(response, createWriteStream(filePath));
    console.log(`  ✓ Downloaded: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.error(`  ✗ Failed to download ${url}:`, error.message);
    return false;
  }
}

function generateUniqueFilename(url, index) {
  // Generate unique hash from URL to ensure no collisions
  const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);

  // Try to extract meaningful ID from Builder.io URL for readability
  const assetMatch = url.match(/assets%2F([a-f0-9]+)%2F([a-f0-9]+)/);
  if (assetMatch) {
    // Use last part of asset ID with hash
    const assetId = assetMatch[2].substring(0, 8);
    return `builder-${assetId}-${hash}.webp`;
  }

  // Fallback to hash-based filename
  return `image-${hash}.webp`;
}

async function findAllExternalUrls(dir) {
  const urlMap = new Map(); // Map of unique URLs to metadata
  let fileCount = 0;
  let urlCount = 0;

  async function scanDir(dirPath) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        // Skip node_modules, .next, etc.
        if (['node_modules', '.next', '.git', 'public'].includes(entry.name)) {
          continue;
        }

        if (entry.isDirectory()) {
          await scanDir(fullPath);
        } else if (entry.isFile() && ['.jsx', '.js', '.json'].includes(path.extname(entry.name))) {
          try {
            const content = await fs.readFile(fullPath, 'utf-8');
            fileCount++;

            // Find all external URLs
            for (const pattern of CONFIG.externalUrlPatterns) {
              let match;
              while ((match = pattern.exec(content)) !== null) {
                const url = match[0];
                if (!urlMap.has(url)) {
                  urlMap.set(url, {
                    url,
                    files: [],
                    downloaded: false,
                    localPath: null,
                  });
                }
                urlMap.get(url).files.push(fullPath);
                urlCount++;
              }
            }
          } catch (error) {
            console.warn(`Warning: Could not read file ${fullPath}`);
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${dirPath}`);
    }
  }

  await scanDir(dir);
  return { urlMap, fileCount, urlCount };
}

async function downloadAllImages(urlMap) {
  await ensureDir(CONFIG.imageDir);
  let successCount = 0;
  let failCount = 0;

  console.log(`\n📥 Downloading ${urlMap.size} unique images...`);

  let index = 0;
  for (const [url, metadata] of urlMap) {
    index++;
    const filename = generateUniqueFilename(url, index);
    const filePath = path.join(CONFIG.imageDir, filename);

    process.stdout.write(`[${index}/${urlMap.size}] `);
    const success = await saveImage(url, filePath);

    if (success) {
      metadata.downloaded = true;
      metadata.localPath = `/images/downloaded/${filename}`;
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n✓ Downloaded: ${successCount}/${urlMap.size} images`);
  if (failCount > 0) {
    console.log(`✗ Failed: ${failCount} images`);
  }

  return urlMap;
}

async function createMappingFile(urlMap) {
  const mapping = {};
  
  for (const [url, metadata] of urlMap) {
    if (metadata.localPath) {
      mapping[url] = {
        localPath: metadata.localPath,
        downloaded: metadata.downloaded,
        files: metadata.files.length,
        filePaths: metadata.files.slice(0, 5), // First 5 files for reference
      };
    }
  }

  const mappingPath = path.join(projectRoot, 'scripts', 'image-localization-mapping-builderio.json');
  await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\n📋 Mapping file saved: ${mappingPath}`);
  
  return mapping;
}

async function updateSourceFiles(urlMap) {
  console.log(`\n🔄 Updating source files...`);

  let filesUpdated = 0;
  let replacementsCount = 0;

  async function updateDir(dirPath) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (['node_modules', '.next', '.git', 'public'].includes(entry.name)) {
          continue;
        }

        if (entry.isDirectory()) {
          await updateDir(fullPath);
        } else if (entry.isFile() && ['.jsx', '.js', '.json'].includes(path.extname(entry.name))) {
          try {
            let content = await fs.readFile(fullPath, 'utf-8');
            let originalContent = content;

            // Replace all URLs with local paths
            for (const [url, metadata] of urlMap) {
              if (metadata.localPath) {
                const regex = new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                const matches = content.match(regex);
                if (matches) {
                  replacementsCount += matches.length;
                  content = content.replace(regex, metadata.localPath);
                }
              }
            }

            // Write back if changed
            if (content !== originalContent) {
              await fs.writeFile(fullPath, content, 'utf-8');
              filesUpdated++;
              console.log(`  ✓ Updated: ${path.relative(projectRoot, fullPath)}`);
            }
          } catch (error) {
            console.warn(`Warning: Could not update file ${fullPath}`);
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${dirPath}`);
    }
  }

  await updateDir(CONFIG.appDir);
  console.log(`\n✓ Updated ${filesUpdated} files with ${replacementsCount} replacements`);

  return { filesUpdated, replacementsCount };
}

async function verifyNoExternalUrls() {
  console.log(`\n🔍 Verifying no Builder.io CDN URLs remain...`);

  let externalUrlCount = 0;
  const foundUrls = new Set();

  async function scanDir(dirPath) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (['node_modules', '.next', '.git', 'public'].includes(entry.name)) {
          continue;
        }

        if (entry.isDirectory()) {
          await scanDir(fullPath);
        } else if (entry.isFile() && ['.jsx', '.js', '.json'].includes(path.extname(entry.name))) {
          try {
            const content = await fs.readFile(fullPath, 'utf-8');

            // Check for Builder.io CDN URLs specifically
            const externalPattern = /https?:\/\/cdn\.builder\.io\/api\/v1\/image\/assets[^\s"'`<>)}\]]*?(?=[\s"'`<>)}\]])/g;
            let match;
            while ((match = externalPattern.exec(content)) !== null) {
              foundUrls.add(match[0]);
              externalUrlCount++;
            }
          } catch (error) {
            // Silent fail
          }
        }
      }
    } catch (error) {
      // Silent fail
    }
  }

  await scanDir(CONFIG.appDir);

  if (externalUrlCount === 0) {
    console.log('✓ No Builder.io CDN URLs found - all images are now localized!');
    return true;
  } else {
    console.warn(`\n✗ Warning: ${externalUrlCount} CDN URLs still found:`);
    for (const url of Array.from(foundUrls).slice(0, 10)) {
      console.warn(`  - ${url.substring(0, 80)}...`);
    }
    if (foundUrls.size > 10) {
      console.warn(`  ... and ${foundUrls.size - 10} more`);
    }
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive image localization...\n');
  console.log(`Configuration:`);
  console.log(`  App Directory: ${CONFIG.appDir}`);
  console.log(`  Download To: ${CONFIG.imageDir}`);

  try {
    // Step 1: Find all external URLs
    console.log(`\n📍 Step 1: Scanning for external image URLs...`);
    const { urlMap, fileCount, urlCount } = await findAllExternalUrls(CONFIG.appDir);
    console.log(`  Scanned ${fileCount} source files`);
    console.log(`  Found ${urlCount} external image references`);
    console.log(`  Unique URLs: ${urlMap.size}`);

    // Step 2: Download all images
    console.log(`\n⬇️  Step 2: Downloading all external images...`);
    const downloadedUrlMap = await downloadAllImages(urlMap);

    // Step 3: Create mapping file
    console.log(`\n📝 Step 3: Creating URL mapping file...`);
    const mapping = await createMappingFile(downloadedUrlMap);

    // Step 4: Update source files
    console.log(`\n✏️  Step 4: Updating source files with local paths...`);
    const { filesUpdated, replacementsCount } = await updateSourceFiles(downloadedUrlMap);

    // Step 5: Verify
    console.log(`\n✅ Step 5: Verifying localization...`);
    const verificationPassed = await verifyNoExternalUrls();

    // Summary
    console.log(`\n${'='.repeat(60)}`);
    console.log('📊 LOCALIZATION COMPLETE - SUMMARY');
    console.log(`${'='.repeat(60)}`);
    console.log(`✓ Images downloaded: ${Object.keys(mapping).length}`);
    console.log(`✓ Source files updated: ${filesUpdated}`);
    console.log(`✓ Total replacements: ${replacementsCount}`);
    console.log(`✓ Verification: ${verificationPassed ? 'PASSED ✓' : 'NEEDS REVIEW ⚠️'}`);
    console.log(`\n📂 Downloaded images location: ${path.relative(projectRoot, CONFIG.imageDir)}`);
    console.log(`📋 URL mapping file: scripts/image-localization-mapping-builderio.json`);
    console.log(`${'='.repeat(60)}\n`);

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    process.exit(1);
  }
}

main();
