'use strict';
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');
let currentScore = document.querySelectorAll('.current-score');
let totalScore = document.querySelectorAll('.score');
let players = document.querySelectorAll('.player');
let ranNumber, i, scores;
//////////////////////////////////////
const endgameSetting = function () {
  rollDice.classList.add('hidden-button');
  hold.classList.add('hidden-button');
  diceImage.classList.add('hidden-button');
};
/////////////////////////////////////
const startPlaying = function () {
  i = 0;
  scores = 0;
  ranNumber = 0;
  for (let j = 0; j < players.length; j++) {
    currentScore[j].textContent = '0';
    totalScore[j].textContent = '0';
    players[j].classList.remove('player--active');
    players[j].classList.remove('player--winner');
  }
  players[0].classList.add('player--active');
  rollDice.classList.remove('hidden-button');
  hold.classList.remove('hidden-button');
  diceImage.classList.remove('hidden-button');
};
////////////////////////////////////
startPlaying();
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
newGame.addEventListener('click', startPlaying);

//Condition win
const winner = function () {
  if (Number(totalScore[i].textContent) >= 20) {
    console.log(`Winner is Player${i + 1}`);
    players[i].classList.add('player--winner');
    players[i].classList.remove('player--active');
    endgameSetting();
  }
};
