import mysql from 'mysql2/promise';

const config = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'nodedb',
  port: process.env.DB_PORT || 3306
};

async function healthCheck() {
  try {
    const connection = await mysql.createConnection(config);
    await connection.ping();
    await connection.end();
    console.log('Health check: OK');
    process.exit(0);
  } catch (error) {
    console.error('Health check failed:', error.message);
    process.exit(1);
  }
}

healthCheck();
