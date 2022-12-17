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
    } else if (playerTotal === '12') {
        return dealerUpcard <= 3 || dealerUpcard >= 7 ? 'h' : 's';
    } else if (playerTotal === 10) {
        return dealerUpcard <= 9 ? 'd' : 'h';
    }  else if (playerTotal === 9) {
        return dealerUpcard >= 3 && dealerUpcard <= 6 ? 'd' : 'h';
    }
}
