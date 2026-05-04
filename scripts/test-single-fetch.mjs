async function test() {
  const response = await fetch('https://evolisca.com/?subtopic=creatures&creature=Arachnogar');
  const html = await response.text();

  // Look for table tags
  const tableMatches = html.match(/<table[^>]*>/g);
  console.log('Found tables:', tableMatches ? tableMatches.length : 0);
  if (tableMatches) {
    tableMatches.forEach((t, i) => {
      console.log(`Table ${i}:`, t.substring(0, 100));
    });
  }

  // Look for data-table class
  const dataTableMatches = html.match(/class="[^"]*data-table[^"]*"/g);
  console.log('\nFound data-table classes:', dataTableMatches ? dataTableMatches.length : 0);

  // Look for all img alt attributes
  const altRegex = /alt="([^"]*)"/g;
  const alts = [];
  let match;
  while ((match = altRegex.exec(html)) !== null) {
    const itemName = match[1].trim();
    if (itemName && itemName.length > 2) {
      alts.push(itemName);
    }
  }

  // Remove duplicates
  const unique = [...new Set(alts)];
  console.log('\nTotal alt attributes found:', unique.length);
  console.log('Sample items:', unique.slice(0, 20));
}

test().catch(console.error);
