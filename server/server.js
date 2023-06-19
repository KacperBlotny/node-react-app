const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const PORT = process.env.PORT || 4001

const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port: ${PORT}`.yellow.bold
  )
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
