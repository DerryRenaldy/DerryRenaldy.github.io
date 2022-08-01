'use strict';

let newScore = 20;
let highScore = 0;
let winStreak = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const max = Number(document.querySelector(`.guess`).max);
const min = Number(document.querySelector(`.guess`).min);
console.log(max, min);

// Display Function
const display = function (element, message) {
  document.querySelector(element).textContent = message;
};

// Event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // console.log(guess);
  if (newScore > 1) {
    if (document.querySelector(`.guess`).value > max) {
      document.querySelector(`.guess`).value = max;
    } else if (document.querySelector(`.guess`).value < min) {
      document.querySelector(`.guess`).value = min;
    }
    // When no input number
    if (!guess) {
      display(`.message`, `🚫 Incorrect Number!`);
    }
    // When player win
    else if (guess === secretNumber) {
      display(`.message`, `✅ Correct Number`);
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.again`).style.backgroundColor = `#E64545`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.check`).disabled = true;
      highScore < newScore ? (highScore = newScore) : (highScore = highScore);
      document.querySelector(`.highscore`).textContent = highScore;
      winStreak += 1;
      document.querySelector(`.streak`).textContent = winStreak;

      if (winStreak >= 5) {
        document.querySelector(`.reward`).style.display = `block`;
        document.querySelector(`.info`).style.display = `none`;
      }
    }

    // When guess is different
    else if (guess !== secretNumber) {
      display(`.message`, guess > secretNumber ? `📈 Too high` : `📉 Too low`);
      newScore -= 1; //Return a value inserted into the .message
      document.querySelector(`.score`).textContent = newScore;
    }
  } else {
    newScore -= 1;
    document.querySelector(`.score`).textContent = newScore;
    display(`.message`, `😢 You lost the game`);
    document.querySelector(`.check`).disabled = true;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  display(`.message`, `Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.score`).textContent = newScore;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.check`).disabled = false;
  document.querySelector(`.again`).style.backgroundColor = `#eee`;
  console.log(secretNumber);
});
console.log(secretNumber);
document.querySelector(`.reward`).addEventListener('click', function () {});
