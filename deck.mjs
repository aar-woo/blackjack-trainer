import createCard from './card.mjs';
import _ from 'lodash';

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

function shuffleDeck(deck) {
  const shuffledDeck = _.shuffle(deck);
  return shuffledDeck;
}

const deck = createDeck();
const shuffledDeck = shuffleDeck(deck);

console.log(shuffledDeck);
