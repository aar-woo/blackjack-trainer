// import Deck from "./deck.mjs";

// const deck = new Deck();
// deck.createCards();
// console.log('deck', deck);
// console.log('deck lengh', deck.cards.length)
// deck.shuffle();

// console.log('deck after shuffle', deck)

// console.log('first card dealt', deck.deal());
// console.log('deck length after deal', deck.cards.length)


import Game from "./game.mjs";
import readline from "readline";
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

export default class Main {
    constructor(){
        this.game = new Game();
        this.reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    gameSetup() {
        this.game.dealCards();
        const hand = this.game.getPlayerHand();
        const handStr = `Your hand: ${hand[0].value} of ${hand[0].suit} and the ${hand[1].value} of ${hand[1].suit}`;;
        const dealerHand = this.game.getDealerHand();
        const dealerHandStr = `The dealer is showing: ${dealerHand[0].value} of ${dealerHand[0].suit}}`;
        console.log(handStr)
        console.log(dealerHandStr);
    }

    getPlayerAction(playerHandStr) {
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
                getPlayerAction(playerHandStr)
            }
        })
    }

}

const main = new Main();
main.gameSetup();
main.getPlayerAction();


