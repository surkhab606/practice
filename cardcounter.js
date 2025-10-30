let count = 0;
function cc (card) { 
  if(card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
    count += 1
  }
  else if(card == "10" || card == "J" || card == "Q" || card == "K" || card == "A") {
    count -= 1
  }
  
  if(count > 0) {
    return count + " Bet"

  }

  if(count <= 0) {
    return count + " Hold"
  }

}

//card counter function that determines whether to bet or hold in blackjack 