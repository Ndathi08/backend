const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('root')
})
app.get('/test', (req, res) => {
    res.send('test')
})

app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })
app.listen(port, () => {
  console.log(`My server listening on port ${port}`)
})