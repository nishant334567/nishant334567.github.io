'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const rolled_dice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

let currentScore = 0;
let active = 0;

hold.addEventListener('click', function () {
  currentScore = 0;
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    score0El.textContent =
      Number(score0El.textContent) + Number(current0El.textContent);
    current0El.textContent = 0;
    active = 1;
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  } else {
    score1El.textContent =
      Number(score1El.textContent) + Number(current1El.textContent);
    current1El.textContent = 0;
    active = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }

  if (Number(score0El.textContent) > 50 || Number(score1El.textContent) > 50) {
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    console.log(score0El.textContent);
    console.log(score1El.textContent);
    Number(score0El.textContent) > 50
      ? alert('Player 0 Wins !!')
      : alert('Player 1 Wins !!');
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
  }
});

rolled_dice.addEventListener('click', function () {
  // generate random number
  const val = Math.floor(Math.random() * 6 + 1);

  // display cube
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${val}.png`;
  //   document.getElementsByTagName('img')[0].attributes[0].nodeValue = x;

  if (val !== 1) {
    currentScore += val;
    active === 0
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);
    // current0El.textContent = currentScore;
  } else {
    currentScore = 0;
    if (
      document.querySelector('.player--0').classList.contains('player--active')
    ) {
      current0El.textContent = 0;
      active = 1;
      document.querySelector('.player--1').classList.add('player--active');
      document.querySelector('.player--0').classList.remove('player--active');
    } else {
      current1El.textContent = 0;
      active = 0;
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    }
  }
});

newGame.addEventListener('click', function () {
  location.reload();
});
