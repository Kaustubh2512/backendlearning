require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aboutus', (req, res) => {
    res.send('<h1>About Us</h1><p>We are a company that values excellence and innovation.</p>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
