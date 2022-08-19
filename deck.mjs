import Card from './card.mjs';
import _ from 'lodash';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

export default class Deck {
  constructor() {
    this.cards = [];
  }

  createCards() {
    for (let i = 0; i < suits.length; i++) {
      const suit = suits[i];
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        const card = new Card(value, suit);
        this.cards.push(card);
      }
    }
  }

  shuffle() {
    const shuffledDeck = _.shuffle(this.cards);
    return shuffledDeck;
  }
}