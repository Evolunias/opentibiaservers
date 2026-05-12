import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.AIVEN_MYSQL_HOST,
  port: parseInt(process.env.AIVEN_MYSQL_PORT || '3306'),
  user: process.env.AIVEN_MYSQL_USER,
  password: process.env.AIVEN_MYSQL_PASSWORD,
  database: process.env.AIVEN_MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0,
});

export default pool;
