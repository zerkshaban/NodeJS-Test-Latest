const express = require('express');
const router = express.Router();

// For the solution, I haved used a very famous formula called Bailey-Borwein-Plouffe formula
// https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula
// Library used https://github.com/kauegimenes/bbp-formula

const bbp = require('bbp-formula');
console.time('estimation');
const calculatedPi = bbp(4);
console.timeEnd('estimation');
console.log(calculatedPi.toString());

module.exports = router;
