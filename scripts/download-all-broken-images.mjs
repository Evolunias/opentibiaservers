import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mirage Island - Hakem's Final Mission images
const mirageIslandImages = [
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2F70180ce017754cc390d4065833b09a72%2F9f109be37f704b4a96b4ef7d82acdca1?format=webp&width=800&height=1200',
    filename: 'step-01-introduction-1.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fe2a257d40a2b452a9455ecf116e8928f%2F70a1a884fd504419bd648e54df296a3e?format=webp&width=800&height=1200',
    filename: 'step-01-introduction-icon.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fe2a257d40a2b452a9455ecf116e8928f%2F0ee0699186af49c88402229f660876db?format=webp&width=800&height=1200',
    filename: 'step-04-voyage-1.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fe2a257d40a2b452a9455ecf116e8928f%2F782b5462384c4e3ba4210d47c65a80d1?format=webp&width=800&height=1200',
    filename: 'step-04-voyage-2.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fe2a257d40a2b452a9455ecf116e8928f%2Fbd4a291275494caa9734b5169d9592f7?format=webp&width=800&height=1200',
    filename: 'step-04-voyage-3.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fc09b9aaa05294955aee33f0a1a025f2d%2F38de0029262d42a6955654d5bf37b54c?format=webp&width=800&height=1200',
    filename: 'step-05-bookshelf.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fc09b9aaa05294955aee33f0a1a025f2d%2F9e63816f2acd4c75b07e8d69467eed44?format=webp&width=800&height=1200',
    filename: 'step-06-sanctum.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fc09b9aaa05294955aee33f0a1a025f2d%2F2bf6cf0154734d7b850127e557bceafb?format=webp&width=800&height=1200',
    filename: 'step-07-chest.webp'
  },
  {
    url: 'https://cdn.builder.io/api/v1/image/assets%2Fc09b9aaa05294955aee33f0a1a025f2d%2F834c709a93134ee5afcc6b2280a7327c?format=webp&width=800&height=1200',
    filename: 'step-08-completion.webp'
  }
];

// Talent Reset Quest - Level 860 images
const talentResetImages = [
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Ff463e00de1004776b121a1378244dbd9?format=webp&width=800&height=1200', filename: 'step-01.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F1c4f7363040943b7a2a87c7238871bda?format=webp&width=800&height=1200', filename: 'step-02.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F6b177039c3b94f59a0c23933395d37ce?format=webp&width=800&height=1200', filename: 'step-03.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Fe29cb69d4a364a39b73fbe830eb8db75?format=webp&width=800&height=1200', filename: 'step-04.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F237b2e7ca5c343b4952a2140f6d68a41?format=webp&width=800&height=1200', filename: 'step-05.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F95ae64c8f1774a639f6f18bf6a80d10e?format=webp&width=800&height=1200', filename: 'step-06.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F120dcc8738de4c749ac5ea5b19e692b7?format=webp&width=800&height=1200', filename: 'step-07.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Fba754418477d44e9839cddfe22ac633c?format=webp&width=800&height=1200', filename: 'step-08.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F40a03e35c9be47958bb0eff25b962686?format=webp&width=800&height=1200', filename: 'step-09.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F503f284e24f545d0848fabd8e7ccaffb?format=webp&width=800&height=1200', filename: 'step-10.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Fd24596e011bc4fbfbb822f5eb0e3993c?format=webp&width=800&height=1200', filename: 'step-11.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Fcb98f6a65c6d4e1d9f71154abd49be0a?format=webp&width=800&height=1200', filename: 'step-12.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F84d7fcfc30ac4d33a2ac4c48e3f7eb11?format=webp&width=800&height=1200', filename: 'step-13.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F1b8362aa4a54497caf9ef8b1cd5ea942?format=webp&width=800&height=1200', filename: 'step-14.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F913cb2c1819e4ebb959808d4ffde70e8?format=webp&width=800&height=1200', filename: 'step-15.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F34e06037db7e496cb849fee87933be8c?format=webp&width=800&height=1200', filename: 'step-16.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F9290225107ca47b5a011025d917bce0d?format=webp&width=800&height=1200', filename: 'step-17.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Ffe2c61fee47a43d3bef644ae598bab61?format=webp&width=800&height=1200', filename: 'step-18.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2F06fc28f3900d4e2893b442f1dfa6e95f?format=webp&width=800&height=1200', filename: 'step-19.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2F37a19055c38e469c898cbf4012915cd3%2Faad327cdae454fbdb09b05d5dbeeeb1e?format=webp&width=800&height=1200', filename: 'step-20.webp' }
];

// Generic Quest Page images
const genericQuestImages = [
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2F0853c0eb420a44b18df47671093a0ab6?format=webp&width=800&height=1200', filename: 'step-01.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2Fa4188e4cee17417481be0190b6bd1777?format=webp&width=800&height=1200', filename: 'step-02.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2Fca5782640b074384903a172c7a5c48f5?format=webp&width=800&height=1200', filename: 'step-03.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2Fc8e8b22591984ceb9f2582cd219aafae?format=webp&width=800&height=1200', filename: 'step-04.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2F22dee0db89cf401198d067a8f45b23d5?format=webp&width=800&height=1200', filename: 'step-05-1.webp' },
  { url: 'https://cdn.builder.io/api/v1/image/assets%2Fa40bb88cd58049f5b0e377027cc73a2f%2Fa5f8a948f3e1406db79c2abddf163045?format=webp&width=800&height=1200', filename: 'step-05-2.webp' }
];

const allQuests = [
  { name: 'Mirage Island - Hakem\'s Quest', folder: 'mirage-island-hakem-quest', images: mirageIslandImages },
  { name: 'Talent Reset Quest', folder: 'talent-reset-quest-level-860', images: talentResetImages },
  { name: 'Generic Quest Page', folder: 'generic-quest', images: genericQuestImages }
];

function downloadImage(imageUrl, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(imageUrl, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(true);
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllQuestImages() {
  console.log('🚀 Starting comprehensive image download and migration...\n');
  
  let totalDownloaded = 0;
  let totalFailed = 0;
  
  for (const quest of allQuests) {
    const targetDir = path.join(__dirname, `../public/images/quests/${quest.folder}`);
    
    // Create directory
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    console.log(`📁 ${quest.name}`);
    console.log(`   Downloading ${quest.images.length} images...`);
    
    for (const image of quest.images) {
      try {
        const filepath = path.join(targetDir, image.filename);
        await downloadImage(image.url, filepath);
        console.log(`   ✅ ${image.filename}`);
        totalDownloaded++;
      } catch (error) {
        console.log(`   ❌ ${image.filename} - ${error.message}`);
        totalFailed++;
      }
    }
    
    console.log();
  }
  
  console.log(`\n✅ Download complete!`);
  console.log(`   Total downloaded: ${totalDownloaded}`);
  if (totalFailed > 0) {
    console.log(`   Failed: ${totalFailed}`);
  }
  console.log(`\n📖 Next steps:`);
  console.log(`   1. Update image paths in page files`);
  console.log(`   2. Verify all images display correctly`);
}

downloadAllQuestImages().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
