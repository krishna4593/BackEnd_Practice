const express = require('express');
const userRoutes = require('./routes/users.route');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
   
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/users', userRoutes);

module.exports = app;