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

const createTablesSQL = `
CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_name (name)
);

CREATE TABLE IF NOT EXISTS players (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT,
  name VARCHAR(255) NOT NULL UNIQUE,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50),
  status VARCHAR(50) DEFAULT 'active',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_account_id (account_id),
  INDEX idx_level (level),
  FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author VARCHAR(255),
  category VARCHAR(50),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_created (created)
);
`;

async function initDatabase() {
  let conn;
  
  try {
    console.log('Connecting to Aiven MySQL...');
    conn = await mysql.createConnection(config);
    console.log('✓ Connected successfully');

    const statements = createTablesSQL.split(';').filter(s => s.trim());
    
    for (const statement of statements) {
      if (statement.trim()) {
        console.log(`Executing: ${statement.substring(0, 50)}...`);
        await conn.execute(statement);
        console.log('✓ Table created/verified');
      }
    }

    console.log('\n✓ Database initialized successfully!');
  } catch (error) {
    console.error('✗ Error initializing database:', error.message);
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

initDatabase();
