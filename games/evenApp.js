import { gameEngine } from '../src/index.js'

const generateEvenQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1
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
