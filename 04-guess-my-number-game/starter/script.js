'use strict';

//DOM Element Selection
const messageEl = document.querySelector('.message');
// console.log(messageEl);

//Change the text content of messageEl
// messageEl.textContent = 'Hello from Javascript';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// scoreEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 17;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

// Game State Variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your Secret Number Is: ', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

//////////

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed: ', guess);

  if (guess === secretNumber) {
console.log('Wow! Correct guess!');
document.querySelector('.number').textContent = secretNumber; 
if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}


document.querySelector('.message').textContent = 'Hooray🎉! You Won!';
document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;


  } else if (guess > secretNumber) {
    console.log('Ngek, too high!');
    document.querySelector('.message').textContent = 'Ngek, too high!';
    score --; 
     if (score < 1) {
  document.querySelector('.message').textContent = 'No💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}
} else if (guess < secretNumber) {
    console.log('Hala, too low!');
    document.querySelector('.message').textContent = 'Hala, too low!';
    score --;
     if (score < 1) {
  document.querySelector('.message').textContent = 'No💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}
  }
 
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

    document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});





