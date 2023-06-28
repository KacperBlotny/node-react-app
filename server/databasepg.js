const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: '123',
  database: 'php',
})

client.connect()

module.exports = { client }
