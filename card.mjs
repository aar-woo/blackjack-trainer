export default class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

const aceofspades = new Card(11, 'spades')
console.log(aceofspades)