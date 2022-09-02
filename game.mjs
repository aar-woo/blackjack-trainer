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
    }

    getPlayerAction() {
        const dealerUpcard = `${this.dealer.getHand()[0].value} of ${this.dealer.getHand()[0].suit}`;
        console.log('Your Hand: ' + this.player.getHandStr() + '\nYour Total: ' + this.player.getTotal());
        console.log(`The dealer is showing: ` + dealerUpcard);
        this.runRules();
        this.reader.question('Hit or Stand? ', input => {
            input = input.toLowerCase();
            if (input === 'stand' || input === 's') {
                console.log('Stand')
                this.reader.close();
            } else if (input === 'hit' || input === 'h') {
                console.log('Hit')
                this.hit(this.player);
                this.runRules() === 'bust' ? this.reader.close() : this.getPlayerAction();
            } else {
                console.log('Sorry, please enter a valid input');
                this.getPlayerAction()
            }

        })
    }

    hit(player) {
        if (!(player instanceof(Dealer))) {
            this.player.hand.push(this.deck.deal())
        } else if (player === 'dealer') {
            this.dealer.hand.push(this.deck.deal());
        }
    } 

    runRules() {
        const dealerCardValues = []
        const playerCardValues = [];
        this.dealer.getHand().forEach(card => { dealerCardValues.push(card.value)})
        this.player.getHand().forEach(card => { playerCardValues.push(card.value)})

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
            console.log('Your Hand: ' + this.player.getHandStr() + '\nYour Total: ' + this.player.getTotal())
            console.log(`Bust! Your hand is greater than 21.`)
            return 'bust';
        }

    }
}

const game = new Game();
game.gameSetup();
game.getPlayerAction();

