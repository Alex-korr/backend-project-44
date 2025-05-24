import readlineSync from 'readline-sync'

const requiredCorrectAnswers = 3

const nameStore = {
  playerName: null,
  askName() {
    this.playerName = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${this.playerName}!`)
  },
  getRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
}

const gameEngine = (gameRules) => {
  console.log('Welcome to the Brain Games!')
  nameStore.askName()
  console.log(gameRules.description)

  for (let i = 0; i < requiredCorrectAnswers; i++) {
    const { question, correctAnswer } = gameRules.generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    if (userAnswer !== correctAnswer.toLowerCase()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${nameStore.playerName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${nameStore.playerName}!`)
}

export { gameEngine }
export { nameStore }
