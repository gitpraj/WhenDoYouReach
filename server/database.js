const { Pool, Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'testdb',
  password: 'prajith271990',
  port: 5432,
})
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

const query = {
  text: 'CREATE TABLE feedback_form(ID INT PRIMARY KEY NOT NULL, QUESTION CHAR(100) NOT NULL, OPTION CHAR(20) NOT NULL);',
  // values: ['brianc', 'brian.m.carlson@gmail.com'],
}

// promise
client.query(query)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))

export default client
