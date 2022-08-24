import Deck from "./deck.mjs";

export default class Game {
    constructor() {
        this.dealer = {
            hand: [],
            total: 0
        }

        this.player = {
            hand: [],
            total: 0
        }

        this.deck = (() => {
            const deck = new Deck();
            deck.createCards();
            deck.shuffle();
            return deck;
        })()
        
    }

    dealCards() {
        for (let i = 0; i < 2; i++) {
            this.dealer.hand.push(this.deck.deal());
            this.player.hand.push(this.deck.deal());
        }
    }



}

const newGame = new Game();
newGame.dealCards();
console.log('playerhand:', newGame.player.hand)
console.log('dealerhand:', newGame.dealer.hand)
console.log('deck length', newGame.deck.cards.length)