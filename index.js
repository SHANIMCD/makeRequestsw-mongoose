const express = require('express');
const app = express();
const cors = require('cors');
const router = require('express').Router();
const bodyParser = require('body-parser');
const exerciseRoutes = require('./Controllers/exController');
require('./config/dbConnection');

app.use(bodyParser.json());
app.use(cors());
app.use('/exercises', exerciseRoutes);

const server = app.listen(() => {
    console.log(`Server running on port: ${server.address().port}`);
})
