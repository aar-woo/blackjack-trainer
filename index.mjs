import Deck from "./deck.mjs";

const deck = new Deck();
deck.createCards();
console.log('deck', deck);
console.log('deck lengh', deck.cards.length)
deck.shuffle();

console.log('deck after shuffle', deck)

console.log('first card dealt', deck.deal());
console.log('deck length after deal', deck.cards.length)


