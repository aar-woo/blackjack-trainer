/**
  * Function that returns a string of the correct action to take
  * depending on the hard total and dealer upcard according to basic strategy
*/

function hardTotals(playerTotal, dealerUpcard) {
  if (playerTotal >= 17) {
    return 's';
  }
  if (playerTotal <= 8) {
    return 'h';
  }
  if (playerTotal === 9) {
    return (dealerUpcard >= 3 && dealerUpcard <= 6 ? 'd' : 'h');
  }
  if (playerTotal === 10) {
    return (typeof dealerUpcard === 'string' ? 'h' : 'd');

  }
  if (playerTotal === 11) {
    return 'd';
  }
  if (playerTotal === 12) {
    return (dealerUpcard <= 3 || dealerUpcard >= 7 || typeof dealerUpcard === 'string' ? 'h' : 's');
  }
  if (playerTotal >= 13 && playerTotal <= 16) {
    return (dealerUpcard <= 6 ? 's' : 'h');
  }
}
