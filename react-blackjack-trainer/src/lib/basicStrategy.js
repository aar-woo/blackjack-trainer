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
    } else if (playerTotal >= 15 && dealerUpcard >= 4 && dealerUpcard <= 6) {
        return 'd';
    } else if (playerTotal >= 15 && dealerUpcard <= 3) {
       return playerTotal === 17 && dealerUpcard === 3 ? 'd' : 'h'
    } 
    return dealerUpcard === 5 || dealerUpcard === 6 ? 'd' : 'h';
}

function comparePair(dealerUpcard, pairCardValue) {
    if (pairCardValue === 11 || pairCardValue === 8) return true;
    if (pairCardValue === 10 || pairCardValue === 5) return false;
    if (isBetween(2, 6, dealerUpcard) && isBetween(6, 9, pairCardValue)) {
        return true;
    } 
    if (pairCardValue === 9) {
        return isBetween(8, 9, dealerUpcard) ? true : false;
    }
    if (dealerUpcard >= 8 && pairCardValue <= 7) return false; 
    if (dealerUpcard <= 7 && pairCardValue <= 3) return true;
    if (dealerUpcard === 7) {
        return pairCardValue === 7 ? true : false;
    }
    return isBetween(5, 6, dealerUpcard) ? true : false; 
}

function isBetween(lower, upper, val) {
    return val >= lower && val <= upper ? true : false;
}
module.exports = { compareHardTotal, compareSoftTotal, comparePair };