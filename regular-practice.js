const createCard = require('./card');
const shuffleDeck = require('./deck')
const readline = require('readline');
const prompt = require('prompt-sync')();

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
  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    const cardValue = hand[i].value
    if (typeof cardValue === 'string' && cardValue !== 'ace') {
      total += 10;
    } else if (cardValue === 'ace') {
      if (total + 11 > 21) {
        total += 1;
      } else {
        total += 11;
      }
    } else {
      total += cardValue;
    }
  }
  return total;
}

function runGame() {
  let endPlayerDeal = false;
  deal();
  console.log(`Your hand: \n${playerHand[0].value} of ${playerHand[0].suit} \n${playerHand[1].value} of ${playerHand[1].suit}\n`);
  console.log(`Dealer: \n${dealerHand[0].value} of ${dealerHand[0].suit} \n${dealerHand[1].value} of ${dealerHand[1].suit}`)
  playerTotal = handTotal(playerHand);

  while (!endPlayerDeal) {
    const action = prompt('Hit, stand, or double? ');
    playerAction(action);
    if (action === 's' || action === 'stand' || playerTotal >= 21) {
      endPlayerDeal = true;
    }
    console.log('playerTotal', playerTotal);

    console.log('player', playerHand)
  }

}

runGame();
