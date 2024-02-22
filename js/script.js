'use strict';

function askQuestion(question, answer) {
  let userInput = prompt(question).toLowerCase();
  if (userInput === answer) {
    alert('Correct!');
    return true;
  } else {
    alert('Incorrect!');
    return false;
  }
}

function greetUser() {
  let userName = prompt('What is your name?');
  alert('Welcome to my site, ' + userName + '!');
  return userName;
}

let user = greetUser();
let totalCorrect = 0;

function displayFinalMessage() {
  alert('Thanks for playing, ' + user + '! You got ' + totalCorrect + ' out of 7 questions correct.');
}

if (askQuestion('Did I receive my Medical Assistant certification in 2015? (y/n)', 'y')); {
  totalCorrect++;
}
if (askQuestion('Do I have 7 years of medical assisting experience? (y/n)', 'y'));{
  totalCorrect++;
}
if (askQuestion('Am I aiming to become a software engineer? (y/n)', 'y'));{
  totalCorrect++;
}
if (askQuestion('Is the sky blue? (y/n)', 'y'));{
  totalCorrect++;
}
if (askQuestion('Is the Earth flat? (y/n)', 'n'));{
  totalCorrect++;
}

let correctNumber = 27; 
let attempts = 4; 
let guessedCorrectly = false;

for (let i = 0; i < attempts; i++) {
  let userGuess = Number(prompt('Guess a number between 1 and 50:'));
  if (userGuess === correctNumber) {
    guessedCorrectly = true;
    alert('Wow! You guessed it right!');
    totalCorrect++;
    break;
  } else if (userGuess < correctNumber) {
    alert('Too low! Try again.');
  } else {
    alert('Too high! Try again.');
  }
}

if (!guessedCorrectly) {
  alert('Sorry! Too many guesses. The correct number was ' + correctNumber + '.');
}

let possibleAnswers = ['apple', 'banana', 'orange', 'grape', 'kiwi']; 
let attempt = 6;
let guessedCorrectly2 = false;

while (attempt > 0) {
  let userGuess2 = prompt('Guess a fruit:').toLowerCase();
  if (possibleAnswers.includes(userGuess2)) {
    guessedCorrectly2 = true;
    alert('Wow! That is correct!');
    totalCorrect++;
    break;
  } else {
    attempt--;
    alert('Incorrect!');
  }
}

if (!guessedCorrectly2) {
  alert('Sorry, you have used all of your attempts. The correct answers were: ' + possibleAnswers.join(', ') + '.');
}

displayFinalMessage();
