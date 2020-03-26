const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
let coins = 5; // That's the value that we will recieve from the frontend.

slotMachineGame = (coins)=>{
  let reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
  let reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'];
  let reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];
  let totalScore = 0;
  let randomSting = [];

  for (let i = 0; i<coins; i++){
    const reel1RandomValue = reel1[Math.floor(Math.random() * reel1.length)];
    const reel2RandomValue = reel2[Math.floor(Math.random() * reel2.length)];
    const reel3RandomValue = reel3[Math.floor(Math.random() * reel3.length)];

    randomSting.push(reel1RandomValue);
    randomSting.push(reel2RandomValue);
    randomSting.push(reel3RandomValue);

    const lemmonsCount = randomSting.filter(fruit => fruit == 'lemon');
    const applesCount = randomSting.filter(fruit => fruit == 'apple');
    const bananasCount = randomSting.filter(fruit => fruit == 'banana');
    const cherriesCount = randomSting.filter(fruit => fruit == 'cherry');

    if (cherriesCount.length > 1){
      if (cherriesCount.length === 3){
        totalScore+=50;
      } else if(cherriesCount.length === 2){
        totalScore+=40;
      }
    } else if (applesCount.length > 1){
      if (applesCount.length === 3){
        totalScore+=20;
      } else if(applesCount.length === 2){
        totalScore+=10;
      }
    } else if (bananasCount.length > 1){
      if (bananasCount.length === 3){
        totalScore+=15;
      } else if(bananasCount.length === 2){
        totalScore+=5;
      }
    } else if(lemmonsCount.length > 2){
        totalScore+=3;
    }
  }
  console.log(totalScore);
}

slotMachineGame(1);

module.exports = router;
