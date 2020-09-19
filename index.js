const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/todos', todoRoutes)

app.get('/', (req, res) => {
    res.json("{message: 'You have a new notification'}")
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App running  on port ${PORT}`)
})