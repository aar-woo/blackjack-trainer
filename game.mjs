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

    getPlayerHand() {
        return this.player.hand;
    }

    getDealerHand() {
        return this.dealer.hand;
    }

}