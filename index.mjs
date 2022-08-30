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
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function run() {
    const newGame = new Game();
    newGame.dealCards();
    const hand = newGame.getPlayerHand();
    const handStr = 'Your hand is the ' + hand[0].value + " of " + hand[0].suit + ' and the ' + hand[1].value + ' of ' + hand[1].suit;
    
    console.log(handStr);
    reader.question('Hit or Stand? ', input => {
        input = input.toLowerCase();
        if (input === 'stand' || input === 's') {
            console.log('Stand')
            reader.close();
        } else if (input === 'hit' || input === 'h') {
            console.log('Hit')
            reader.close();
        }
    })
}

run();
