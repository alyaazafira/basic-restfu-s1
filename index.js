const express = require('express')
const app = express()
const port  = 3000


app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/bye', (req, res) => {
    res.send('BYE BYE WORLD')
})

app.listen(port,() => {
    console.log(' Example app listening on port')
})