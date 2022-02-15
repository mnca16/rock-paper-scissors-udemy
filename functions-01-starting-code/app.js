const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK},${PAPER} or ${SCISSORS}`, 
    ''
    ).toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else SCISSORS;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
      cChoice === ROCK && pChoice === PAPER || 
      cChoice === PAPER && pChoice === SCISSORS ||
      cChoice === SCISSORS && pChoice === ROCK
    ) {
      return RESULT_PLAYER_WINS;
    }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
   console.log('Game is starting...');
   const playerChoice = getPlayerChoice();
   const computerChoice = getComputerChoice();
   let winner;
   if (playerChoice) {
     winner = getWinner(computerChoice, playerChoice);
   } else {
       winner = getWinner(computerChoice);
   }
   
   let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE }, computer picked ${computerChoice}, there for you  `;;
   if (winner === RESULT_DRAW) {
       message = message + 'had a draw.';
   } else if (winner === RESULT_PLAYER_WINS) {
       message = message + 'won.';
   } else {
       message = message + 'lost';
   }
   alert(message);
   gameIsRunning = false;
   });


// not related to the game

const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumUp(1, 5, 7, 34, -78, 67));
console.log(sumUp(12, 34, 5, 6, 7, 8, 9, 7, -76));



















