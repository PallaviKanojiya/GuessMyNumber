'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct answer🏆';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input --
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔No number !';
    displayMessage('⛔No number');

    //When Player wins --
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Answer!🏆';
    displayMessage('Correct Answer!🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong --
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =guess > secretNumber ? 'Too high!!!!🤞' : 'Too low!!!!🤞';

      displayMessage(guess > secretNumber ? 'Too high!!!!🤞' : 'Too low!!!!🤞');
      score--; // score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#D71313';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
