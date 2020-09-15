const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
    res.json("{message: 'You have a new notification'}")
})

app.use('/api/todos', todoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App running  on port ${PORT}`)
})