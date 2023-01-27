'use strict';

let number = document.querySelector('.number');
let currentScore = document.querySelector('.current-score');
let highScore = document.querySelector('#high-score');
let message = document.querySelector('.message');
let secretNumber = Math.floor(Math.random() * (21 - 1) + 1);

let count = 20;
let scoreRecord = 0;

console.log(secretNumber, 'first secret number');

document.querySelector('.check-btn').addEventListener('click', function () {
  let guess = Number(document.querySelector('.number-input').value);
  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess < secretNumber) {
    message.textContent = 'Guess was too low!';
    count--;
    currentScore.textContent = count;
  } else if (guess > secretNumber) {
    message.textContent = 'Guess was too high!';
    count--;
    currentScore.textContent = count;
  } else {
    message.textContent = '🥳 You Got It!!!';
    count += 5;
    number.textContent = guess;
    currentScore.textContent = count;
    if (count > scoreRecord) {
      scoreRecord = count;
      highScore.textContent = count;
      message.textContent = '🏅🏅You set a new high Score!';
    }
  }
});

document.querySelector('.replay-btn').addEventListener('click', function () {
  count = 20;
  currentScore.textContent = 20;
  document.querySelector('.number-input').value = '';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * (21 - 1) + 1);
  console.log(secretNumber, 'new secret number');
});
