const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes
const productRoute = require('./routes/post');

// Dotenv
dotenv.config();

// Mongoose DB connect 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('Connection to DB SUCCESSFUL!')
);

// JSON 
app.use(express.json());
app.use(cors());

// Route Middleware
app.use('/api', productRoute);

// Port 
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});