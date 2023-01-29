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

const diceImage = () => {
  if (randomNumber === 1) dice.src = 'dice-1.png';
  if (randomNumber === 2) dice.src = 'dice-2.png';
  if (randomNumber === 3) dice.src = 'dice-3.png';
  if (randomNumber === 4) dice.src = 'dice-4.png';
  if (randomNumber === 5) dice.src = 'dice-5.png';
  if (randomNumber === 6) dice.src = 'dice-6.png';
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
    count = 0;
    currentScore0.textContent = count;
  } else if (player1.classList.contains('player--active')) {
    score1.textContent = Number(score1.textContent) + count;
    count = 0;
    currentScore1.textContent = count;
  }
}

// Resets all scores
function reset(scores) {
  for (let i = 0; i < scores.length; i++) {
    console.log(scores.textContent);
    scores[i].textContent = 0;
  }
}

let countActivePlayer = 1;

let count = 0;
// holdCount();

// Eventlistener on roll dice button
rollBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  if (player0.classList.contains('player--active')) {
    console.log(randomNumber, 'first random number');

    diceImage();
    currentScoreTracker(currentScore0);
    // holdCount();
  } else if (player1.classList.contains('player--active')) {
    diceImage();
    currentScoreTracker(currentScore1);
    // holdCount();
  } else {
    console.log('wrong logic');
  }
});

// Eventlistener on hold button
holdBtn.addEventListener('click', () => {
  // Current points added to player points
  addCurrentTotal();

  // Removes active class and assigns to next player
  addRemoveActive();
});

// New Game button eventlistener
newBtn.addEventListener('click', () => {
  reset(allScores);
  reset(allCurrentScores);
  if (!player0.classList.contains('player--active')) {
    player1.classList.remove('player-active');
    player0.classList.add('player--active');
  }
});
