import { gameEngine } from '../src/index.js'

const generatePrimeNumberQuestion = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  const question = randomNumber
  let correctAnswer

  const isPrime = (n) => {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    const sqrtN = Math.sqrt(n)
    for (let i = 3; i <= sqrtN; i += 2) {
      if (n % i === 0) return false
    }
    return true
  }

  if (isPrime(randomNumber) === true) {
    correctAnswer = 'yes'
  }
  else {
    correctAnswer = 'no'
  }

  return { question, correctAnswer }
}

const primeNumberGame = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion: generatePrimeNumberQuestion,
}

const start = () => gameEngine(primeNumberGame)

export { start }
