const express = require('express');
const app = express();
const countriesNameRoutes = require('./api/routes/country');

app.use('/countries', countriesNameRoutes);


module.exports = app;
