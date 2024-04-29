#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const guess = await inquirer.prompt([
    { name:"userGuessNumber",
      type:"number",
      message:"please guess a number",
    },
]);

if ( guess.userGuessNumber < randomNumber) {
    console.log("Too Low! Try again.");
}
else if  ( guess.userGuessNumber > randomNumber) {
    console.log("Too high! Try again.");
}
else {
    console.log("congrulation! You Guess right number.");
}

