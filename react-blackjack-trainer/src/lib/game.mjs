import Dealer from "./dealer.mjs";
import Deck from "./deck.mjs";
import Player from "./player.mjs";

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
    
    /** refactor code to work with React not console inputs anymore
    getPlayerAction() {
        const dealerUpcard = `${this.dealer.getHand()[0].value} of ${this.dealer.getHand()[0].suit}`;
        console.log('Your Hand: ' + this.player.getHandStr() + '\nYour Total: ' + this.player.getTotal());
        console.log(`The dealer is showing: ` + dealerUpcard);
        if (this.runRules() === 'dealer blackjack') return;
        this.reader.question('Hit or Stand? ', input => {
            input = input.toLowerCase();
            if (input === 'stand' || input === 's') {
                console.log('You stand')
                this.stand();
                const result = this.runRules(); 
                console.log(result, 'wins!');
                this.reader.close();
            } else if (input === 'hit' || input === 'h') {
                console.log('You hit')
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
        } else {
            this.dealer.hand.push(this.deck.deal());
        }
    } 

    stand() {
        let numHits = 0;

        while (this.dealer.getTotal() < 17) {
            this.hit(this.dealer);
            numHits++;
        }
        console.log('The dealer hit ' + numHits + ' times.')
        console.log(`The dealer's hand is: ` + this.dealer.getHandStr() + '\nDealer Total: ' + this.dealer.getTotal());
    }

    runRules() {
        let winner = '';
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
                    this.reader.close()
                    return 'dealer blackjack';
                }
            }
        }

        if (playerTotal > 21) {
            console.log('Your Hand: ' + this.player.getHandStr() + '\nYour Total: ' + this.player.getTotal())
            console.log(`Bust! Your hand is greater than 21.`)
            console.log('Dealer Wins!');
            return 'bust';
        }

        if (dealerTotal > 21) {
            console.log('The dealer busts!')
            winner = 'Player';
            return winner;
        }

        if (playerTotal === dealerTotal) return 'push';

        playerTotal > dealerTotal ? winner = 'Player' : winner = 'Dealer';
        
        return winner;
    } */
}

// const game = new Game();
// game.gameSetup();
// game.getPlayerAction();

