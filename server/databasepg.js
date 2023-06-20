const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: '123',
  database: 'php',
})

client.connect()

client.query(`SELECT * from users`, (err, res) => {
  if (!err) {
    console.log(res.rows)
  } else if (err) {
    console.log('Error')
  }
  client.end
})
