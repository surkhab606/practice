let fortune1 = "Zekrom uses Gigawatt Strike. It misses!";
let fortune2 = "Zekrom uses Gigawatt Strike. It deals 150 damage!";
let fortune3 = "Reshiram uses Turboblaze. It misses!";
let fortune4 = "Reshiram uses Turboblaze. It deals 150 damage!";
let fortune5 = "Both Pokemon charge up, ready to attack!";
let randomNumber = Math.round(Math.random() * (5 - 1) + 1);
let selectedFortune; 

if (randomNumber == 1) {
  selectedFortune = fortune1;
}

else if (randomNumber == 2) {
  selectedFortune = fortune2;
}

else if (randomNumber == 3) {
  selectedFortune = fortune3;
}

else if (randomNumber == 4) {
  selectedFortune = fortune4;
}

else if (randomNumber == 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);