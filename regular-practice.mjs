import createCard from './card.mjs';
import shuffleDeck from './deck.mjs';

const deck = shuffleDeck();

const playerHand = [];

const dealerHand = [];

function deal() {
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
}

deal();
console.log(deck);
console.log('player', playerHand);
console.log('dealer', dealerHand);
