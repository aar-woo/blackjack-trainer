import Dealer from "./dealer.mjs";
import Deck from "./deck.mjs";
import Player from "./player.mjs";
import readline from "readline";

export default class Game {
    constructor() {
        this.dealer = new Dealer();

        this.player = new Player();

        this.deck = (() => {
            const deck = new Deck();
            deck.createCards();
            deck.shuffle();
            return deck;
        })()

        this.reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
    }

    dealCards() {
        for (let i = 0; i < 2; i++) {
            this.dealer.hand.push(this.deck.deal());
            this.player.hand.push(this.deck.deal());
        }
    }

    gameSetup() {
        this.dealCards();
        const hand = this.player.getHand();
        const handStr = `Your hand: ${hand[0].value} of ${hand[0].suit} and the ${hand[1].value} of ${hand[1].suit}`;;
        const dealerHand = this.player.getHand();
        const dealerHandStr = `The dealer is showing: ${dealerHand[0].value} of ${dealerHand[0].suit}`;
        return [handStr, dealerHandStr]
    }

    getPlayerAction([playerHandStr, dealerHandStr]) {
        console.log(playerHandStr)
        console.log(dealerHandStr);
        this.reader.question('Hit or Stand? ', input => {
            input = input.toLowerCase();
            if (input === 'stand' || input === 's') {
                console.log('Stand')
                this.reader.close();
            } else if (input === 'hit' || input === 'h') {
                console.log('Hit')
                this.reader.close();
            } else {
                console.log('Sorry, please enter a valid input');
                this.getPlayerAction([playerHandStr, dealerHandStr])
            }
        })
    }

    // hit(player) {
    //     if (player === 'player') {
    //         this.player.hand.push()
    //     }
    // } 
}

const game = new Game();
const gameHands = game.gameSetup();
game.getPlayerAction(gameHands);
