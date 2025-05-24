import { gameEngine } from '../index.js'
import { nameStore } from '../index.js'

const generateEvenQuestion = () => {
  const number = nameStore.getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

  return { question, correctAnswer }
}

const evenGame = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion: generateEvenQuestion,
}

const start = () => gameEngine(evenGame)

export { start }
