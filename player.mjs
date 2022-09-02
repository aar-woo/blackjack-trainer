export default class Player {
    constructor() {
        this.hand = [];
        this.total = 0;
    }

    getHand() {
        return this.hand;
    }

    getHandStr() {
        let handStr = `${this.hand[0].value} of ${this.hand[0].suit} and the ${this.hand[1].value} of ${this.hand[1].suit}`
        if (this.hand.length === 2) {
            return handStr;
        }
        if (this.hand.length > 2) {
            for (let i = 2; i < this.hand.length; i++) {
                handStr = `${this.hand[i].value} of ${this.hand[i].suit}, ${handStr}`; 
            }
        }
        return handStr;
    }

    getTotal() {
        this.total = 0;
        const allNumValues = [];
        const allFaceValues = [];
        for (let i = 0; i < this.hand.length ; i++) {
            const currCard = this.hand[i];
            if (typeof currCard.value === 'number') {
                allNumValues.push(currCard.value);
            } else {
                allFaceValues.push(currCard.value);
            }
        }

        allNumValues.forEach(value => this.total += value)

        if (allFaceValues.length === 0) {
            return this.total
        } 

        allFaceValues.forEach(value => {
            if (value === 'ace') {
                if ((this.total + 11 )<= 21) {
                    this.total += 11;
                } else {
                    this.total += 1;
                }
            } else {
                this.total += 10;
            }
        })

        return this.total;
    }
}