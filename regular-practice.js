// import createCard from './card.mjs';
// import shuffleDeck from './deck.mjs';
// import prompt from 'prompt-sync';
// const prompt = require('prompt-sync')();
const createCard = require('./card');
const shuffleDeck = require('./deck')
const readline = require('readline');
const prompt = require('prompt-sync')();
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const deck = shuffleDeck();
const playerHand = [];
const dealerHand = [];
let playerTotal;
let dealerTotal;

function deal() {
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
}

function playerAction(action) {
  if (action === 'h' || action === 'hit') {
    playerHand.push(deck.shift());
  } else if (action == 's' || 'stand') {
    playerTotal = handTotal(playerHand);
  } else if (action == 'd' || 'double') {
    playerHand.push(deck.shift());
    playerTotal = handTotal(playerHand);
  }
}

function handTotal(hand) {
  let total;
  for (let i = 0; i < hand.length; i++) {
    total += hand[i];
  }
  return total;
}

function runGame() {
  deal();
  console.log('player', playerHand);
  console.log('dealer', dealerHand);
  const action = prompt('Hit, stand, or double? ');
  playerAction(action);
  console.log('player', playerHand)
}

runGame();
