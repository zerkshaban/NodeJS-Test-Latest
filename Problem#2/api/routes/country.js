const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

// Added hardcoded country just for testing
var country = 'malta';

//Api to featch the information of the given country
router.get('/', async (request ,response)=>{
  const api_url = `https://restcountries.eu/rest/v2/name/${country}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
})

module.exports = router;
