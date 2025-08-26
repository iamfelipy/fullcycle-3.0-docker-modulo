import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000
const config ={
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

// create table people if not exists, with name field if not exists
const createTableSql = `
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
  )
`;

connection.query(createTableSql, (err) => {
  if (err) {
    // error creating table
    console.error('Error creating table:', err);
  } else {
    // check if name column exists, add if not
    const checkColumnSql = `
      SHOW COLUMNS FROM people LIKE 'name'
    `;
    connection.query(checkColumnSql, (err, results) => {
      if (err) {
        console.error('Error checking column:', err);
      } else if (results.length === 0) {
        // name column does not exist, add it
        const addColumnSql = `
          ALTER TABLE people ADD COLUMN name VARCHAR(255)
        `;
        connection.query(addColumnSql, (err) => {
          if (err) {
            console.error('Error adding name column:', err);
          }
        });
      }
    });
  }
});


app.get('/', (req, res) => {
  // insert a new user into the people table and return the list of all users
  const insertSql = `INSERT INTO people(name) VALUES('User ${Math.floor(Math.random() * 10000)}')`;
  connection.query(insertSql, (insertErr) => {
    if (insertErr) {
      res.status(500).send('Error inserting user');
      return;
    }
    const selectSql = `SELECT name FROM people`;
    connection.query(selectSql, (selectErr, results) => {
      if (selectErr) {
        res.status(500).send('Error fetching users');
        return;
      }
      // build the list of names
      const namesList = results.map(row => `<li>${row.name}</li>`).join('');
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${namesList}
        </ul>
      `);
    });
  });
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})