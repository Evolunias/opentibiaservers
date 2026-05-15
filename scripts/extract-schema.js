#!/usr/bin/env node

import mysql from 'mysql2/promise';

const config = {
  host: process.env.AIVEN_MYSQL_HOST,
  port: parseInt(process.env.AIVEN_MYSQL_PORT || '3306'),
  user: process.env.AIVEN_MYSQL_USER,
  password: process.env.AIVEN_MYSQL_PASSWORD,
  database: process.env.AIVEN_MYSQL_DATABASE,
  ssl: { rejectUnauthorized: false },
};

async function extractSchema() {
  let conn;
  
  try {
    console.log('Connecting to Aiven MySQL...');
    conn = await mysql.createConnection(config);
    console.log('✓ Connected successfully\n');

    // Get all tables
    const [tables] = await conn.execute(
      `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?`,
      [process.env.AIVEN_MYSQL_DATABASE]
    );

    console.log(`Found ${tables.length} tables:\n`);

    const schema = {};

    for (const { TABLE_NAME } of tables) {
      // Get columns for each table
      const [columns] = await conn.execute(
        `SELECT 
          COLUMN_NAME,
          COLUMN_TYPE,
          IS_NULLABLE,
          COLUMN_KEY,
          EXTRA,
          COLUMN_DEFAULT
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
        ORDER BY ORDINAL_POSITION`,
        [process.env.AIVEN_MYSQL_DATABASE, TABLE_NAME]
      );

      // Get constraints/indexes
      const [indexes] = await conn.execute(
        `SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE 
        FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
        WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
        [process.env.AIVEN_MYSQL_DATABASE, TABLE_NAME]
      );

      schema[TABLE_NAME] = {
        columns: columns.map(col => ({
          name: col.COLUMN_NAME,
          type: col.COLUMN_TYPE,
          nullable: col.IS_NULLABLE === 'YES',
          key: col.COLUMN_KEY || null,
          extra: col.EXTRA || null,
          default: col.COLUMN_DEFAULT,
        })),
        constraints: indexes,
      };

      console.log(`✓ ${TABLE_NAME}`);
    }

    // Output as formatted markdown
    let markdown = `# Database Schema Reference\n\n`;
    markdown += `**Database:** ${process.env.AIVEN_MYSQL_DATABASE}\n`;
    markdown += `**Generated:** ${new Date().toISOString()}\n\n`;
    markdown += `## Tables Overview\n\n`;

    for (const [tableName, tableInfo] of Object.entries(schema)) {
      markdown += `### ${tableName}\n\n`;
      markdown += `| Column | Type | Nullable | Key | Extra |\n`;
      markdown += `|--------|------|----------|-----|-------|\n`;

      for (const col of tableInfo.columns) {
        const key = col.key ? `\`${col.key}\`` : '-';
        const extra = col.extra ? `\`${col.extra}\`` : '-';
        markdown += `| \`${col.name}\` | \`${col.type}\` | ${col.nullable ? 'YES' : 'NO'} | ${key} | ${extra} |\n`;
      }

      if (tableInfo.constraints.length > 0) {
        markdown += `\n**Constraints:**\n`;
        for (const constraint of tableInfo.constraints) {
          markdown += `- ${constraint.CONSTRAINT_TYPE}: \`${constraint.CONSTRAINT_NAME}\`\n`;
        }
      }

      markdown += `\n`;
    }

    // Save to file
    const fs = await import('fs');
    fs.writeFileSync('SCHEMA_REFERENCE.md', markdown);
    
    // Also save as JSON
    const jsonOutput = {
      database: process.env.AIVEN_MYSQL_DATABASE,
      generatedAt: new Date().toISOString(),
      tables: schema,
    };
    fs.writeFileSync('schema.json', JSON.stringify(jsonOutput, null, 2));

    console.log('\n✓ Schema extracted successfully!');
    console.log('  - Generated: SCHEMA_REFERENCE.md (markdown format)');
    console.log('  - Generated: schema.json (JSON format)');

  } catch (error) {
    console.error('✗ Error extracting schema:', error.message);
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

extractSchema();
