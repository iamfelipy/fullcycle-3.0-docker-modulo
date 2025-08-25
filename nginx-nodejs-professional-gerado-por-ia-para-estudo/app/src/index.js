import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.APP_PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'nodedb',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Initialize database
async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Create table if not exists
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS people (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `;
    
    await connection.execute(createTableSql);
    connection.release();
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'node-app'
  });
});

// Main endpoint
app.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    
    // Insert new user
    const userName = `User ${Math.floor(Math.random() * 10000)}`;
    const insertSql = 'INSERT INTO people(name) VALUES(?)';
    await connection.execute(insertSql, [userName]);
    
    // Get all users
    const selectSql = 'SELECT name, created_at FROM people ORDER BY created_at DESC';
    const [results] = await connection.execute(selectSql);
    
    connection.release();
    
    // Build HTML response
    const namesList = results.map(row => 
      `<li>${row.name} (${new Date(row.created_at).toLocaleString()})</li>`
    ).join('');
    
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Cycle Rocks!</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #333; }
          ul { list-style-type: none; padding: 0; }
          li { padding: 8px; margin: 4px 0; background: #f5f5f5; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>Full Cycle Rocks! 🚀</h1>
        <p>Total users: ${results.length}</p>
        <ul>${namesList}</ul>
      </body>
      </html>
    `);
    
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
async function startServer() {
  await initializeDatabase();
  
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

startServer().catch(console.error);
