const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const requestPromise = require('request-promise');
const endpoint = `https://restcountries.eu/rest/v2/name`;
// Added hardcoded country just for testing
let strValues = [`malta`,`india`,`tur`,`france`]
let countries = [
    `${endpoint}/${strValues[0]}`,
    `${endpoint}/${strValues[1]}`,
    `${endpoint}/${strValues[2]}`,
    `${endpoint}/${strValues[3]}`,
];

  let requests = countries.map(country => fetch(country));
  Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }
    return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // all JSON answers are parsed: "countriesName" is the array of them
    .then(countriesName => countriesName.forEach(countryName => console.log(countryName)));


module.exports = router;
