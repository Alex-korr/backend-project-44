import readlineSync from 'readline-sync'

const requiredCorrectAnswers = 3
let correctAnswerCounter = 0
let gameOver = 0

const nameStore = {
  playerName: null,
  askName() {
    this.playerName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${this.playerName}!`)
  },
  getRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}

const gameEngine = (gameRules) => {
  console.log('Welcome to the Brain Games!')
  nameStore.askName()
  console.log(gameRules.description)

  do {
    correctAnswerCounter += 1
    const { question, correctAnswer } = gameRules.generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    if (userAnswer === correctAnswer.toLowerCase()) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      gameOver = 1
      return console.log(`Let's try again, ${nameStore.playerName}!`)
    }
  } while (correctAnswerCounter < requiredCorrectAnswers && gameOver === 0)

  console.log(`Congratulations, ${nameStore.playerName}!`)
}

export { gameEngine }
export { nameStore }
