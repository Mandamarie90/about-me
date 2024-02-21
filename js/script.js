'use strict';

function askQuestion(question, answer) {
  let userInput = prompt(question).toLowerCase();
  if (userInput === answer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

function greetUser() {
  let userName = prompt("What's your name?");
  alert("Welcome to my site, " + userName + "!");
  return userName;
}

let user = greetUser();

function displayFinalMessage() {
  alert("Thanks for playing, " + user + "! I hope you enjoyed learning about me.");
}

askQuestion("Did I receive my Medical Assistant certification in 2015? (y/n)", "y");
askQuestion("Do I have 7 years of medical assisting experience? (y/n)", "y");
askQuestion("Am I aiming to become a software engineer? (y/n)", "y");
askQuestion("Is the sky blue? (y/n)", "y"); 
askQuestion("Is the Earth flat? (y/n)", "n");

displayFinalMessage();