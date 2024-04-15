const express = require('express')
const app = express()
const port = 3000
const catsRouter = require('./routes/cat.routes');

app.use(express.json());
app.use('/cats', catsRouter);


// app.get('/', (req, res) => {
//   res.send('root')
// })
// app.get('/test', (req, res) => {
//     res.send('test')
// })

// app.get('/ab?cd', (req, res) => {
//     res.send('ab?cd')
//   })

app.listen(port, () => {
  console.log(`My server listening on port ${port}`)
})