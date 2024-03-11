function playerChoice() {
  let choice = "";
  while (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
      choice = prompt(`'ROCK', 'PAPER', or 'SCISSORS'?`).toUpperCase();
  }
  return choice;
}
  function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'ROCK';
      case 1:
      return 'PAPER';
      case 2:
      return 'SCISSORS'
     }
  }

  function playGame() {
    const player = playerChoice();
    const computer = computerChoice();

    console.log(`Player chose: ${player}`);
    console.log(`Computer chose: ${computer}`);
    alert(`Computer chose: ${computer}`);

    if (player === computer) {
        alert(`It's a tie!`);
        console.log(`It's a tie!`);
    } else if (
        (player === 'ROCK' && computer === 'SCISSORS') ||
        (player === 'PAPER' && computer === 'ROCK' ) ||
        (player === 'SCISSORS' && computer === 'PAPER')
              ){
        alert(`Player wins!`);
        console.log(`Player wins!`);
    } else {
        alert(`Computer wins!`);
        console.log(`Computer wins!`);
    }

  }

  playGame();

// function playGame() {
//     const player = playerChoice();
//     const computer = computerChoice();

//     console.log(`Player chose: ${player}`);
//     console.log(`Computer chose: ${computer}`);

//     if (player === computer) {
//         console.log(`It's a tie!`);
//     } else if (
//         (player === 'ROCK' && computer === 'SCISSORS') ||
//         (player === 'PAPER' && computer === 'ROCK') ||
//         (player === 'SCISSORS' && computer === 'PAPER')
//     ) {
//         console.log(`Player wins!`);
//     } else {
//         console.log(`Computer wins!`);
//     }
// }

// playGame();
