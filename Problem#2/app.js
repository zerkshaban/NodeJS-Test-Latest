const express = require('express');
const app = express();
const countriesNameRoutes = require('./api/routes/country');

// Route to country file, that have the api for getting the data of the given country
app.use('/countries', countriesNameRoutes);

module.exports = app;
