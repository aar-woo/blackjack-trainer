function compareHardTotal(dealerUpcard, playerTotal) {
    if (playerTotal >= 17) {
        return 's';
    }
    if (playerTotal <= 8) {
        return 'h';
    }
    if (playerTotal === 11) {
        return 'd';
    }

    if (playerTotal >= 13) {
        return dealerUpcard <= 6 ? 's' : 'h';
    } else if (playerTotal === 12) {
        return dealerUpcard <= 3 || dealerUpcard >= 7 ? 'h' : 's';
    } else if (playerTotal === 10) {
        return dealerUpcard <= 9 ? 'd' : 'h';
    }  else if (playerTotal === 9) {
        return dealerUpcard >= 3 && dealerUpcard <= 6 ? 'd' : 'h';
    }
}

function compareSoftTotal(dealerUpcard, playerTotal) {
    if (playerTotal >= 20) return 's';
    if (playerTotal >= 19) {
        if (dealerUpcard === 6) {
            return 'd';
        } else {
            return 's';
        }
    } else if (playerTotal >= 18) {
        if (dealerUpcard <= 6) {
            return 'd';
        } 
        return dealerUpcard <= 8 ? 's' : 'h';
    } else if (playerTotal <= 17 && dealerUpcard >= 7) {
        return 'h'
    } else if (playerTotal >= 15 && dealerUpcard >= 4 &&  dealerUpcard <= 6) {
        return 'd';
    } else if (playerTotal >= 15 && dealerUpcard <= 3) {
       return playerTotal === 17 && dealerUpcard === 3 ? 'd' : 'h'
    } 
    return dealerUpcard === 5 || dealerUpcard === 6 ? 'd' : 'h';
}
module.exports = { compareHardTotal, compareSoftTotal};