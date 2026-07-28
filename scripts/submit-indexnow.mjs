const defaultSite = 'https://opentibiaservers.com';
const defaultKey = 'c9d0f40f6c430e82f3ba44fe71492ee0';
const defaultEndpoints = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

function argValue(name, fallback = null) {
  const found = process.argv.find((arg) => arg.startsWith(`--${name}=`));
  return found ? found.slice(name.length + 3) : fallback;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function chunk(values, size) {
  const chunks = [];
  for (let index = 0; index < values.length; index += size) {
    chunks.push(values.slice(index, index + size));
  }
  return chunks;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'OpenTibiaServersBot/1.0 (+https://opentibiaservers.com; indexnow)',
      accept: 'application/xml,text/xml,text/plain,*/*',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function parseSitemapUrls(xml) {
  return unique([...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((match) => match[1].trim()));
}

async function submitBatch(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'user-agent': 'OpenTibiaServersBot/1.0 (+https://opentibiaservers.com; indexnow)',
    },
    body: JSON.stringify(payload),
  });
  const text = await response.text().catch(() => '');
  return {
    endpoint,
    status: response.status,
    ok: response.ok || response.status === 202,
    body: text.slice(0, 300),
  };
}

const site = argValue('site', defaultSite).replace(/\/+$/, '');
const sitemapUrl = argValue('sitemap', `${site}/sitemap.xml`);
const key = argValue('key', process.env.INDEXNOW_KEY || defaultKey);
const keyLocation = argValue('key-location', `${site}/${key}.txt`);
const batchSize = Number(argValue('batch-size', '10000'));
const limit = Number(argValue('limit', '0'));
const dryRun = process.argv.includes('--dry-run');
const endpoints = unique((argValue('endpoints') || defaultEndpoints.join(',')).split(',').map((item) => item.trim()));

const sitemapXml = await fetchText(sitemapUrl);
let urls = parseSitemapUrls(sitemapXml).filter((url) => url.startsWith(site));
if (limit > 0) urls = urls.slice(0, limit);

console.log(`indexnow_sitemap\t${sitemapUrl}`);
console.log(`indexnow_urls\t${urls.length}`);
console.log(`indexnow_key_location\t${keyLocation}`);

if (dryRun) {
  console.log('indexnow_dry_run\ttrue');
  for (const url of urls.slice(0, 20)) console.log(`url\t${url}`);
} else if (!urls.length) {
  throw new Error('No URLs found in sitemap for submission.');
} else {
  const batches = chunk(urls, batchSize);
  let submitted = 0;
  let failed = 0;

  for (const endpoint of endpoints) {
    for (const [index, urlList] of batches.entries()) {
      const result = await submitBatch(endpoint, {
        host: new URL(site).hostname,
        key,
        keyLocation,
        urlList,
      });
      if (result.ok) {
        submitted += urlList.length;
      } else {
        failed += urlList.length;
      }
      console.log(`indexnow_result\t${endpoint}\tbatch=${index + 1}/${batches.length}\turls=${urlList.length}\tstatus=${result.status}\tok=${result.ok}\tbody=${JSON.stringify(result.body)}`);
    }
  }

  console.log(`indexnow_submitted_url_endpoint_pairs\t${submitted}`);
  console.log(`indexnow_failed_url_endpoint_pairs\t${failed}`);
}
