const createCard = require('./card');
const _ = require('lodash');

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

function createDeck() {
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i];
    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      deck.push(createCard(value, suit));
    }
  }
  return deck;
}

function shuffleDeck() {
  const shuffledDeck = _.shuffle(createDeck());
  return shuffledDeck;
}

module.exports = shuffleDeck;
