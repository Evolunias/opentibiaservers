import fs from 'node:fs/promises';
import path from 'node:path';
import { Client } from 'pg';

const connectionString = process.env.DIRECT_CONNECTION_STRING;

if (!connectionString) {
  console.error('DIRECT_CONNECTION_STRING is required.');
  process.exit(1);
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Pass one or more migration file paths.');
  process.exit(1);
}

const client = new Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

await client.connect();

try {
  for (const file of files) {
    const fullPath = path.resolve(file);
    const sql = await fs.readFile(fullPath, 'utf8');
    process.stdout.write(`Applying ${file}... `);
    await client.query(sql);
    process.stdout.write('ok\n');
  }
} finally {
  await client.end();
}
