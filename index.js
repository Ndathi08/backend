const express = require('express')
const app = express()
const port = 3000
const catsRouter = require('./routes/cat.routes');
const todoRouter = require('./routes/todo.route');

app.use(express.json());
app.use('/cats', catsRouter);
app.use('/todos', todoRouter);


app.listen(port, () => {
  console.log(`My server listening on port ${port}`)
})