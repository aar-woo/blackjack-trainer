import Card from "./card.mjs";
import Deck from "./deck.mjs";

const deck = new Deck();
deck.createCards();
console.log('deck', deck);
console.log('deck lengh', deck.cards.length)
console.log(deck.shuffle());


