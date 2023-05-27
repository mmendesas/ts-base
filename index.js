const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  return res.send('Express hello')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})