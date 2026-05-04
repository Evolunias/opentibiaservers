#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images', 'boss-raid-assets');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// All unique builder.io URLs from the codebase
const allUrls = [
  // Logo and main assets
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F8596ff74e3754cf19c13894ff10ac644%2F2f3381d7283641858b017c68cea4c775?format=webp&width=800&height=1200', name: 'evolisca-logo' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fceca9ce9d76042fb82a187224a51f3c0%2F42529d3c6ebd45f78b0daa0e5326c43f?format=webp&width=800&height=1200', name: 'georgedoors-discord' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fd6ec467e427e4d28b82f1c0f8a0c2147%2F44d664bf77594bcd958f4e38f4decbc8?format=webp&width=800&height=1200', name: 'magic-stones' },
  // Boss/Raid images (unique asset IDs)
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F1d322248276d4b45b348afb539502a4e?format=webp&width=800&height=1200', name: 'boss-001' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F276c6e9731b3420e87bd1c610d2a1a62?format=webp&width=800&height=1200', name: 'boss-002' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Ff4a7e8d275bf437196260e5c900e475b?format=webp&width=800&height=1200', name: 'boss-003' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F18099b1fed834262a4fdf0dcc083139b?format=webp&width=800&height=1200', name: 'boss-004' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fe2ac1f3924c242d197b2212cf4db3a30?format=webp&width=800&height=1200', name: 'boss-005' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F1fefdfc79dd34bad9299b491a97795d5?format=webp&width=800&height=1200', name: 'boss-006' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa9388a1ba9dd476c9a2ccf80e28c1879?format=webp&width=800&height=1200', name: 'boss-007' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F6f746a137ffd4b1b933fab3a20208ad9?format=webp&width=800&height=1200', name: 'boss-008' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F4403cf400e0142a3b9f42827eaee5d3f?format=webp&width=800&height=1200', name: 'boss-009' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F4c3a61ebaa664ebfb2c8d56fe0cdfef3?format=webp&width=800&height=1200', name: 'boss-010' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F25f56e6bcd8e4c7582a9e84d3c20aa9a?format=webp&width=800&height=1200', name: 'boss-011' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fbdd970dfdb264ad3978f6df9f1242626?format=webp&width=800&height=1200', name: 'boss-012' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fef389b7f077e472290733d1465615b4d?format=webp&width=800&height=1200', name: 'boss-013' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fb6bd0f8094204f24ab9d393d041c109e?format=webp&width=800&height=1200', name: 'boss-014' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fda0b9c6d4f7645248575744acc88c5cf?format=webp&width=800&height=1200', name: 'boss-015' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F1d7c8e18073743c191ce17db04fb6636?format=webp&width=800&height=1200', name: 'boss-016' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F512912e8ec0d4b18b238869bd056a388?format=webp&width=800&height=1200', name: 'boss-017' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F9024fd502e4644eeb69230a8c55c5a94?format=webp&width=800&height=1200', name: 'boss-018' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F806385fee66943a7b481657912f9f325?format=webp&width=800&height=1200', name: 'boss-019' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F35910230fa9b499197b1788b44cb4cf5?format=webp&width=800&height=1200', name: 'boss-020' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fc548e7b5e5f54c1f83536e1026d0a0da?format=webp&width=800&height=1200', name: 'boss-021' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fc4ca2cdb5320418a994b5017a5aae5ff?format=webp&width=800&height=1200', name: 'boss-022' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F82b290aa8e2f493d87bcee656284e70b?format=webp&width=800&height=1200', name: 'boss-023' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F6aaae1c3041f4722a3fba68604aa39e1?format=webp&width=800&height=1200', name: 'boss-024' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fff0ee1941f0f4c4ea793c728044536c0?format=webp&width=800&height=1200', name: 'boss-025' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F8741bbb0db53443788fa3297a6634e0d?format=webp&width=800&height=1200', name: 'boss-026' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F06f4092660cd409da84b775f30675be0?format=webp&width=800&height=1200', name: 'boss-027' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F9086478ca4dd42e8a8a79e0e389f9236?format=webp&width=800&height=1200', name: 'boss-028' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fd8e700f0c6d64b17a6279a71991beb3b?format=webp&width=800&height=1200', name: 'boss-029' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fea4c619c567b46d8b19916b4d29f45d9?format=webp&width=800&height=1200', name: 'boss-030' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F953b95a9997c4e20a42974315704a364?format=webp&width=800&height=1200', name: 'boss-031' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F1073a986e48842b981fb2e8f26d49eeb?format=webp&width=800&height=1200', name: 'boss-032' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa1c1de00da364f058aae7fe35986175a?format=webp&width=800&height=1200', name: 'boss-033' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F74aac7e310ac4c3d835a5bfd522a74e0?format=webp&width=800&height=1200', name: 'boss-034' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F21ea0bc780934a38b2960b951098cbfb?format=webp&width=800&height=1200', name: 'boss-035' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F6b31535ef68f4c2795cc09a4095723b1?format=webp&width=800&height=1200', name: 'boss-036' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F2a9a4a4497324aceb7816f498edf947b?format=webp&width=800&height=1200', name: 'boss-037' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa9cd2fd47eff4caba704762de3f1480e?format=webp&width=800&height=1200', name: 'boss-038' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F3415812c4cdd41e19b97bc3f56d8494f?format=webp&width=800&height=1200', name: 'boss-039' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F0ec7b44aa1f04799af4c6efa64936868?format=webp&width=800&height=1200', name: 'boss-040' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F477cfe66aa4e477790a95dee54bbf8df?format=webp&width=800&height=1200', name: 'boss-041' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F8bbd521c99994ea2acddd909c62ccd01?format=webp&width=800&height=1200', name: 'boss-042' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa7bf5fe255784c9192e95be0ebd0d1d7?format=webp&width=800&height=1200', name: 'boss-043' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fc6d07aad3ec541e3b33277cfe52fe9c0?format=webp&width=800&height=1200', name: 'boss-044' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa042ae8664c04ae0beef2557901cd856?format=webp&width=800&height=1200', name: 'boss-045' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fc5ef3e86c8bd487db579a577cb1bbd1c?format=webp&width=800&height=1200', name: 'boss-046' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa853a4299b9846fa9798a009388da5c8?format=webp&width=800&height=1200', name: 'boss-047' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F2f2ebb651a7e43c6b92e8506c784b7b9?format=webp&width=800&height=1200', name: 'boss-048' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F57043405f52448738c2dfd09398ef33e?format=webp&width=800&height=1200', name: 'boss-049' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Ff527d64973d84cce8280563d396c8957?format=webp&width=800&height=1200', name: 'boss-050' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fa5a2978287b243389494151d7611204b?format=webp&width=800&height=1200', name: 'boss-051' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F63f4638718b94b7a9db14a79932c5a26?format=webp&width=800&height=1200', name: 'boss-052' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fff21cf25ff8649a08e09f79f2e712c3c?format=webp&width=800&height=1200', name: 'boss-053' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F807be1c2abec479b818c1023610e344f?format=webp&width=800&height=1200', name: 'boss-054' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F1073b244c1b343a6908ef1c387e0f101?format=webp&width=800&height=1200', name: 'boss-055' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fbd59d1eeebf545f69574f64dacce22c3?format=webp&width=800&height=1200', name: 'boss-056' },
  // Hidden talent point images
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F0d6a5c2944e445699bb71742ee9979e3?format=webp&width=800&height=1200', name: 'hidden-talent-001' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fce8573d6dc8941169c68f423ffe1bac7?format=webp&width=800&height=1200', name: 'hidden-talent-002' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Ff48b29221bf14504b2de4526ee32fdec?format=webp&width=800&height=1200', name: 'hidden-talent-003' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F113260a6a7d94d6f9b2c1d9d5084223e?format=webp&width=800&height=1200', name: 'hidden-talent-004' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2Fdee7df928cab4a4697049db8766d0b9f?format=webp&width=800&height=1200', name: 'hidden-talent-005' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Ffa253d52efc942368a322fbf2e2b910a%2F6f2d15de6df24b5ab32dc79cdf14d889?format=webp&width=800&height=1200', name: 'hidden-talent-006' },
];

let downloadedCount = 0;
let failedCount = 0;
const failedUrls = [];

function downloadFile(imageObj) {
  return new Promise((resolve) => {
    const filepath = path.join(imagesDir, `${imageObj.name}.webp`);
    const file = fs.createWriteStream(filepath);

    https.get(imageObj.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        downloadedCount++;
        console.log(`  [${downloadedCount}/62] ${imageObj.name}.webp`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      failedCount++;
      failedUrls.push(imageObj.name);
      console.log(`  ✗ Failed: ${imageObj.name}`);
      resolve();
    });
  });
}

console.log('🔄 Downloading all builder.io images to local repository...\n');

Promise.all(allUrls.map(downloadFile))
  .then(() => {
    // Create URL mapping file
    const mapping = {};
    allUrls.forEach(img => {
      mapping[img.url] = `/images/boss-raid-assets/${img.name}.webp`;
    });

    const mappingPath = path.join(projectRoot, 'scripts', 'url-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));

    console.log(`\n✓ Downloaded ${downloadedCount} images successfully!`);
    if (failedCount > 0) {
      console.log(`⚠ Failed to download ${failedCount} images: ${failedUrls.join(', ')}`);
    }

    console.log('\n📁 Images stored in: /images/boss-raid-assets/');
    console.log('📋 Mapping file created: scripts/url-mapping.json');
    console.log('\nNext steps:');
    console.log('1. Run: npm run replace-builder-urls');
    console.log('2. Verify all builder.io references are removed');
    process.exit(failedCount > 0 ? 1 : 0);
  });
