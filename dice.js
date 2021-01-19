//advanced (optional)
let numberOfSides = prompt("How many sides does your dice have?");
let numberOfRolls = prompt("How many times would you like to roll your dice?");

let playingGame = true;
while (playingGame) {
  let rolls = 0;
  while (rolls < numberOfRolls) {
    let dice1 = Math.floor(Math.random() * numberOfSides + 1);
    let dice2 = Math.floor(Math.random() * numberOfSides + 1);

    console.log(`You rolled a ${dice1} and a ${dice2}`);
    console.log(`Total: ${dice1 + dice2}`);

    rolls++;
  }
  let input = prompt("Roll again? (y/n)");
  if (input === "n") {
    playingGame = false;
  } 
}

//while loop
// let playingGame = true;
// while (playingGame) {
//   let dice1 = Math.floor(Math.random() * 6 + 1);
//   let dice2 = Math.floor(Math.random() * 6 + 1);

//   console.log(`You rolled a ${dice1} and a ${dice2}`);
//   console.log(`Total: ${dice1 + dice2}`);

//   let input = prompt("Press 'Y' to roll again. Press 'S' to stop.");
//   if (input === "S") {
//     playingGame = false;
//   }
// }

// do while loop
// let playingGame = true
// do {
//   // let dice1 = Math.floor((Math.random() * 6) + 1)
//   // let dice2 = Math.floor((Math.random() * 6) + 1)

//   console.log(`You rolled a ${dice1} and a ${dice2}`)
//   console.log(`Total: ${dice1 + dice2}`)

//   let input = prompt("Press 'Y' to roll again, press 'S' to stop")
//   while (input !== "Y" && input !== "S") {
//     input = prompt("Please enter 'Y' or 'S'.")
//   }
//   if (input === "S") {
//     playingGame = false
//   }
// } while (playingGame)
