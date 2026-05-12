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
  // Aiven requires SSL connection
  ssl: {
    rejectUnauthorized: false
  },
  // Connection timeout settings
  acquireTimeout: 30000,
  connectTimeout: 30000,
});

// Log connection status
pool.on('connection', (connection) => {
  console.log('[Aiven] New connection established');
});

pool.on('error', (error) => {
  console.error('[Aiven Connection Error]', {
    code: error.code,
    message: error.message,
    errno: error.errno,
  });
});

export default pool;
