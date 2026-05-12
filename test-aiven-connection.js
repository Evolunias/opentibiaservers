const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    console.log('🔌 Testing Aiven MySQL Connection...');
    console.log(`Host: ${process.env.AIVEN_MYSQL_HOST}`);
    console.log(`Port: ${process.env.AIVEN_MYSQL_PORT}`);
    console.log(`User: ${process.env.AIVEN_MYSQL_USER}`);
    console.log(`Database: ${process.env.AIVEN_MYSQL_DATABASE}`);
    console.log('---');

    const connection = await mysql.createConnection({
      host: process.env.AIVEN_MYSQL_HOST,
      port: parseInt(process.env.AIVEN_MYSQL_PORT || '3306'),
      user: process.env.AIVEN_MYSQL_USER,
      password: process.env.AIVEN_MYSQL_PASSWORD,
      database: process.env.AIVEN_MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 1,
      queueLimit: 0,
      enableKeepAlive: true,
      ssl: {
        rejectUnauthorized: false
      }, // Aiven requires SSL
    });

    console.log('✅ Connection successful!');

    // Test a simple query
    const [result] = await connection.execute('SELECT 1 as test');
    console.log('✅ Query executed:', result);

    // Get database info
    const [dbInfo] = await connection.execute('SELECT DATABASE() as current_db, VERSION() as mysql_version');
    console.log('✅ Database Info:', dbInfo[0]);

    // List tables if any exist
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('✅ Existing Tables:', tables.length > 0 ? tables : 'None yet');

    await connection.end();
    console.log('\n✅ Connection test PASSED');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Connection test FAILED');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    if (error.errno) console.error('Errno:', error.errno);
    process.exit(1);
  }
}

testConnection();
