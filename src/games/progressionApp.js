import { gameEngine } from '../index.js'
import { nameStore } from '../index.js'

const generateProgressionQuestion = () => {
  const maxSequenceLength = 10
  const difference = nameStore.getRandomNumber(1,4)
  const maxStart = 100 - 9 * difference
  const start = nameStore.getRandomNumber(1, maxStart)
  const sequence = []
  const blankSpace = nameStore.getRandomNumber(1, maxSequenceLength)
  let question = []
  let correctAnswer

  for (let i = 0; i < maxSequenceLength; i++) {
    sequence.push(start + i * difference)
  }

  correctAnswer = String(sequence[blankSpace])

  sequence[blankSpace] = '..'

  question = sequence.join(' ')

  return { question, correctAnswer }
}

const progressionGame = {
  description: 'What number is missing in the progression?',
  generateQuestion: generateProgressionQuestion,
}

const start = () => gameEngine(progressionGame)

export { start }
