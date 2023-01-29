'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const activePlayer = document.querySelector('.player--active');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const allScores = document.querySelectorAll('.score');
const allCurrentScores = document.querySelectorAll('.current-score');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let randomNumber = Math.trunc(Math.random() * 6) + 1;

let playing;

const init = function () {
  playing = true;
  dice.classList.add('hidden');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  reset(allScores);
  reset(allCurrentScores);
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};

init();

const diceImage = function () {
  dice.src = `dice-${randomNumber}.png`;
};

// Removes active class and assigns to next player
const addRemoveActive = () => {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};

// when currentScore(#) is passed as argument, function adds dice number to current score
const currentScoreTracker = currentScorePlayer => {
  if (randomNumber === 1) {
    count = 0;
    currentScorePlayer.textContent = count;
    addRemoveActive();
  } else if (randomNumber !== 1) {
    count += randomNumber;
    currentScorePlayer.textContent = count;
  }
};

// Current points added to player points
function addCurrentTotal() {
  if (player0.classList.contains('player--active')) {
    score0.textContent = Number(score0.textContent) + count;
    // playerWins();
    count = 0;
    currentScore0.textContent = count;
  } else if (player1.classList.contains('player--active')) {
    score1.textContent = Number(score1.textContent) + count;
    // playerWins();
    count = 0;
    currentScore1.textContent = count;
  }
}

// Player reaches 100 points
const playerWins = () => {
  if (Number(score0.textContent) >= 10) {
    playing = false;
    player0.classList.add('player--winner');
    dice.classList.add('hidden');
  } else if (Number(score1.textContent) >= 10) {
    playing = false;
    player1.classList.add('player--winner');
    dice.classList.add('hidden');
  } else {
    addRemoveActive();
  }
};

// Resets all scores for class
function reset(scores) {
  playing = true;
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = 0;
  }
}

// current score count
let count = 0;

// Eventlistener on roll dice button
rollBtn.addEventListener('click', () => {
  if (playing) {
    // random number
    randomNumber = Math.trunc(Math.random() * 6) + 1;
    // show dice
    dice.classList.remove('hidden');
    if (player0.classList.contains('player--active')) {
      diceImage();
      currentScoreTracker(currentScore0);
      // holdCount();
    } else if (player1.classList.contains('player--active')) {
      diceImage();
      currentScoreTracker(currentScore1);
      // holdCount();
    }
  }
});

// Eventlistener on hold button
holdBtn.addEventListener('click', () => {
  if (playing) {
    // Current points added to player points
    addCurrentTotal();

    playerWins();
  }
});

// New Game button eventlistener
newBtn.addEventListener('click', init);
