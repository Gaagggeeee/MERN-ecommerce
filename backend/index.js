const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes POST GET DELETE UPDATE 
const postRoute = require('./routes/post');
const getRoute = require('./routes/get');
const deleteRoute = require('./routes/delete');
const updateRoute = require('./routes/update');

// Dotenv
dotenv.config();

// Mongoose DB connect 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('Connection to DB SUCCESSFUL!')
);

// JSON 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Route Middleware
app.use('/api', postRoute);
app.use('/api', getRoute);
app.use('/api', deleteRoute);
app.use('/api', updateRoute);

// Port 
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});