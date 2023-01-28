'use strict';

let number = document.querySelector('.number');
let currentScore = document.querySelector('.current-score');
let highScore = document.querySelector('#high-score');
let message = document.querySelector('.message');
let pageWrapper = document.querySelector('.page-wrapper');
let secretNumber = Math.floor(Math.random() * (21 - 1) + 1);
// random number using Math.trunc
// let secretNumber = Math.truc(Math.random() * 20) + 1;

// When player loses game
const endGame = () => {
  message.textContent = '🥴 You lost the game!';
  count = 0;
  currentScore.textContent = count;
  pageWrapper.style.backgroundColor = 'red';
};

// Displays messages after input
const messageHTML = html => (message.textContent = html);

// Set current score
const currentScoreHTML = () => (currentScore.textContent = count);

// Sets background color
const backgroundColor = color => (pageWrapper.style.backgroundColor = color);

let count = 20;
let scoreRecord = 0;

console.log(secretNumber, 'first secret number');

// Player clicks 'check' button
document.querySelector('.check-btn').addEventListener('click', function () {
  let guess = Number(document.querySelector('.number-input').value);

  // No input
  if (!guess || guess < 1) {
    messageHTML('⛔️ Choose a number between 1 and 20!');

    // Guess is too high or too low
  } else if (guess !== secretNumber) {
    if (count > 1) {
      message.textContent =
        guess > secretNumber
          ? '⬆️ Guess was too high!'
          : '⬇️ Guess was too low!';
      count--;
      currentScoreHTML();
    } else {
      endGame();
    }

    // Player guesses correct number
  } else {
    messageHTML('🥳 You Got It!!! +5pt Bonus!');
    count += 5;
    number.textContent = guess;
    currentScoreHTML();
    if (count > scoreRecord) {
      scoreRecord = count;
      highScore.textContent = count;
      backgroundColor('rgb(52, 172, 52)');
      number.style.width = '11rem';
      messageHTML('🏅🏅You set a new high Score!');
    }
  }
});

// Resets all values except for highscore
document.querySelector('.replay-btn').addEventListener('click', function () {
  count = 20;
  currentScoreHTML();
  backgroundColor('black');
  document.querySelector('.number-input').value = '';
  messageHTML('Start guessing...');
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * (21 - 1) + 1);
  console.log(secretNumber, 'new secret number');
});
