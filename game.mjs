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
        this.dealCards()
        const playerTotal = this.player.getTotal();
        const playerHand = this.player.getHand();
        const dealerHand = this.player.getHand();
        const playerHandStr = `Your hand: ${playerHand[0].value} of ${playerHand[0].suit} and the ${playerHand[1].value} of ${playerHand[1].suit}\n Your total: ${playerTotal}`;
        const dealerHandStr = `The dealer is showing: ${dealerHand[0].value} of ${dealerHand[0].suit}`;
        return [playerHandStr, dealerHandStr]
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
                this.hit(this.player);
                this.runRules();
                this.reader.close();
            } else {
                console.log('Sorry, please enter a valid input');
                this.getPlayerAction([playerHandStr, dealerHandStr])
            }

        })
    }

    hit(player) {
        if (!(player instanceof(Dealer))) {
            this.player.hand.push(this.deck.deal())
            console.log(`Your hand is now ${this.player.getHand()}`)
        } else if (player === 'dealer') {
            this.dealer.hand.push(this.deck.deal());
        }
    } 

    runRules() {
        const dealerCardValues = []
        const playerCardValues = [];

        this.dealer.getHand().forEach(card => { dealerCardValues.push(card.value)})
        this.player.getHand().forEach(card => { playerCardValues.push(card.value)})
        console.log('run rules')
        const dealerTotal = this.dealer.getTotal();
        const playerTotal = this.player.getTotal();

        if (dealerTotal === 21) {
                if (dealerCardValues.includes('ace')) {
                    if (dealerCardValues.includes('king') || dealerCardValues.includes('jack') || dealerCardValues.includes('queen') || dealerCardValues.includes()) {
                        console.log('Dealer has Blackjack, you lose.');
                        this.reader.close();
                    }
                }
        }

        if (playerTotal > 21) {
            console.log(`Bust! Your hand is greater than 21.`)
        }


    }
}

const game = new Game();
const gameHands = game.gameSetup();
game.getPlayerAction(gameHands);

