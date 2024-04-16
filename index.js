const express = require('express')
const app = express()
const port = 3000
const todoRouter = require('./routes/todo.route');
const catsRouter = require('./routes/cat.routes');

app.use(express.json());
app.use('/cats', catsRouter);
app.use('/todos', todoRouter);




app.listen(port, () => {
  console.log(`My server listening on port ${port}`)
})