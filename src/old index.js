import readlineSync from "readline-sync";
import { checkRightAnswer } from "./index1.js";

let currentGivenAnswer;
let currentGeneratedNumber;
let rightAnswersCounter = 0;
let correctAnswer;
let playerName;
let gameOver = 0;
const requiredCorrectAnswers = 3;

const askName = () => {
  const name = readlineSync.question("May I have your name? ");
  let playerName = name;
  return playerName;
};

function getRandomQuestion() {
  currentGeneratedNumber = Math.floor(Math.random() * 100) + 1;
  return currentGeneratedNumber;
}

const askForAnswer = () => {
  console.log(`Question: ${getRandomQuestion()}`);
  const answer = readlineSync.question("Your answer: ");
  currentGivenAnswer = answer.toLowerCase();
  if (currentGeneratedNumber % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  
  checkRightAnswer();

  /*if (currentGivenAnswer === correctAnswer) {
    rightAnswersCounter += 1;
    if (rightAnswersCounter === requiredCorrectAnswers) {
      console.log(`Congratulations, ${playerName}!`);
    }
    return "Correct!";
  } else {
    gameOver = 1;
    console.log(
      `'${currentGivenAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`,
    );
    return `Let's try again, ${playerName}!`;
  }*/
};

const gameStarts = () => {
  console.log("Welcome to the Brain Games!");
  console.log(
    `Hello, ${askName(playerName)}!\nAnswer 'yes' if number is even otherwise answer 'no'.`,
  );

  do {
    console.log(`${askForAnswer()}`);
  } while (rightAnswersCounter < requiredCorrectAnswers && gameOver === 0);
};

export { gameStarts };
export { askName };
//export { nameStore };