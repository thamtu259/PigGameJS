'use strict';
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');
let currentScore = document.querySelectorAll('.current-score');
let totalScore = document.querySelectorAll('.score');
let players = document.querySelectorAll('.player');
/////////////////////////////////////
let i = 0;
let scores = 0;
let ranNumber = 0;
////////////////////////////////////
let swapPlayer = function () {
  switch (i) {
    case 0:
      i = 1;
      break;
    case 1:
      i = 0;
      break;
  }
};
const modifyStylePlayer = function () {
  players[i].classList.remove('player--active');
  currentScore[i].textContent = String(0);
  scores = 0;
  swapPlayer();
  players[i].classList.add('player--active');
};

//Click Roll Dice Event
rollDice.addEventListener('click', function () {
  ranNumber = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${ranNumber}.png`;
  if (ranNumber === 1) {
    currentScore[i].textContent = '0';
    modifyStylePlayer();
    winner();
  } else {
    scores = Number(currentScore[i].textContent);
    scores = scores + ranNumber;
    currentScore[i].textContent = String(scores);
    console.log(ranNumber);
  }
});

//Click Hold score Event
hold.addEventListener('click', function () {
  let totalScore_number_type = Number(totalScore[i].textContent);
  totalScore_number_type += scores;
  totalScore[i].textContent = String(totalScore_number_type);
  winner();
  modifyStylePlayer();
});

//Click New Game Event
newGame.addEventListener('click', function () {
  for (let j; j < players.length; j++) {
    currentScore[i].textContent = '0';
    totalScore[i].textContent = '0';
    players[i].classList.remove('player--active');
    players[0].classList.add('player--active');
  }
});
const winner = function () {
  if (Number(totalScore[i].textContent) >= 100) {
    console.log(`Winner is Player${i + 1}`);
  }
};
