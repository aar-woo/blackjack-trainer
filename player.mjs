export default class Player {
    constructor() {
        this.hand = [];
        this.total = 0;
    }

    getHand() {
        return this.hand;
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