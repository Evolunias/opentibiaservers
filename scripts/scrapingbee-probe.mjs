const apiKey = process.env.SCRAPINGBEE_API_KEY;
const targetUrl = process.argv[2] || 'https://otservlist.org/list-server_players_online-desc-1.html';

if (!apiKey) {
  console.error('SCRAPINGBEE_API_KEY is required');
  process.exit(1);
}

const url = new URL('https://app.scrapingbee.com/api/v1/');
url.searchParams.set('api_key', apiKey);
url.searchParams.set('url', targetUrl);
url.searchParams.set('render_js', 'false');
url.searchParams.set('block_resources', 'true');

const response = await fetch(url);
const html = await response.text();
const tableMatch = html.match(/<table\b(?=[^>]*id=["']servlist["'])[^>]*>([\s\S]*?)<\/table>/i);
const table = tableMatch ? tableMatch[0] : '';
const rows = [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].slice(0, 5).map((match) => match[0]);
const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)]
  .map((match) => match[1])
  .filter((href) => /ots|server|list/i.test(href))
  .slice(0, 100);
const interestingRows = [...html.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)]
  .map((match) => match[0])
  .filter((row) => /\/ots\/|server|players|online/i.test(row))
  .slice(0, 12);
const cellPattern = /<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi;
const rowCellCounts = interestingRows.map((row) => ({
  cellCount: [...row.matchAll(cellPattern)].length,
  sourceId: (row.match(/\/ots\/(\d+)/i) || [])[1] || null,
  text: row.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 220),
}));

console.log(JSON.stringify({
  status: response.status,
  ok: response.ok,
  htmlLength: html.length,
  tableLength: table.length,
  rowCount: [...table.matchAll(/<tr\b[^>]*>/gi)].length,
  hrefs,
  rows: rows.map((row) => row.slice(0, 1500)),
  rowCellCounts,
  interestingRows: interestingRows.map((row) => row.slice(0, 1500)),
}, null, 2));
