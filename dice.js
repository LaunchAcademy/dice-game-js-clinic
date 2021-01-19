// let continueGame = true;

// do {
//   let diceOne = Math.floor(Math.random() * 6 + 1);
//   let diceTwo = Math.floor(Math.random() * 6 + 1);

//   console.log(`You rolled a ${diceOne} and a ${diceTwo}`);
//   console.log(`Total: ${diceOne + diceTwo}`);

//   let input = prompt("Press 'Y' to roll again, 'S' to stop.");
//   while (input !== "Y" && input !== "S") {
//     input = prompt("Please enter 'Y' or 'S'.");
//   }
//   if (input === "S") {
//     continueGame = false;
//   }
// } while (continueGame === true);

//advanced
// let numOfSides = prompt("How many sides does your dice have?");
// let numOfRolls = prompt(
//   "How many times would you like to roll your pair of dice?"
// );

// let continueGame = true;

// while (continueGame) {
//   let rolls = 0;
//   while (rolls < numOfRolls) {
//     let diceOne = Math.floor(Math.random() * numOfSides + 1);
//     let diceTwo = Math.floor(Math.random() * numOfSides + 1);

//     console.log(`You rolled a ${diceOne} and a ${diceTwo}`);
//     console.log(`Total: ${diceOne + diceTwo}`);

//     rolls++;
//     continueGame = false;
//   }
//   let input = prompt("Roll Again? (y/n)");
//   if (input === "y") {
//     continueGame = true;
//   } else {
//     alert("Thanks for playing!");
//   }
// }

//advanced using a for loop
// let numOfSides = prompt("How many sides does your dice have?");
// let numOfRolls = prompt(
//   "How many times would you like to roll your pair of dice?"
// );

// let continueGame = true;

// while (continueGame) {
//   for (let i = 0; i < numOfRolls; i++) {
//     let diceOne = Math.floor(Math.random() * numOfSides + 1);
//     let diceTwo = Math.floor(Math.random() * numOfSides + 1);

//     console.log(`You rolled a ${diceOne} and a ${diceTwo}`);
//     console.log(`Total: ${diceOne + diceTwo}`);
//   }

//   let input = prompt("Roll again? (y/n)");
//   if (input === "n") {
//     continueGame = false;
//   }
// }
