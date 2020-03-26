const express = require('express');
const app = express();
const slotMachineGame = require('./api/routes/slot-machine-game');

// Route to country file, that have the api for getting the data of the given country
app.use('/slot-machine-gane', slotMachineGame);

module.exports = app;
