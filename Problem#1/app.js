const express = require('express');
const app = express();
const nthPiDigit = require('./api/routes/nth-pie-digit');

// Route to country file, that have the api for getting the data of the given country
app.use('/nthdigit', nthPiDigit);

module.exports = app;
