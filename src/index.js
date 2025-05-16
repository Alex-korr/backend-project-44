import readlineSync from 'readline-sync';

let currentGivenAnswer = '';
let currentGeneratedNumber;
let rightAnswersCounter = 0;
let correctAsnwer = '';
let playerName;
let gameOver = 0;
const requiredCorrectAnswers = 3;

const askName = () => {
    const name = readlineSync.question('May I have your name? ');
    playerName = name;
    return playerName;
}

function getRandomNumber() {
    currentGeneratedNumber = Math.floor(Math.random() * 100) + 1;
    return currentGeneratedNumber;
}

const askForAnswer = () => {
    console.log(`Question: ${getRandomNumber()}`);
    const answer = readlineSync.question('Your answer: ');
    currentGivenAnswer = answer.toLowerCase();
    if (currentGeneratedNumber % 2 === 0) {
        correctAsnwer = 'yes';
    } else {
        correctAsnwer = 'no';
    }

    if (currentGivenAnswer === correctAsnwer) {
      rightAnswersCounter += 1;
      return "Correct!";
    } else {
      gameOver = 1;
      console.log(`'${currentGivenAnswer}' is wrong answer ;(. Correct answer was 'no'.`)
      return `Let's try again, ${playerName}!`;
    }
}

const gameStarts = () => {
  console.log('Welcome to the Brain Games!')
  console.log(`Hello, ${askName()}!\nAnswer 'yes' if number is even otherwise answer 'no'.`);
  //console.log(`Question: ${getRandomNumber()}`);
  //console.log(`${askForAnswer()}`)
  do {
    console.log(`${askForAnswer()}`)
  } while (rightAnswersCounter < requiredCorrectAnswers && (gameOver === 0) );
  console.log(`Congratulations, ${playerName}!`);
}

export { gameStarts };