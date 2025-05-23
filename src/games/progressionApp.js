import { gameEngine } from '../index.js'

const generateProgressionQuestion = () => {
  const maxSequenceLength = 10
  const difference = Math.floor(Math.random() * 4) + 1
  const maxStart = 100 - 9 * difference
  const start = Math.floor(Math.random() * maxStart) + 1
  const sequence = []
  const blankSpace = Math.floor(Math.random() * maxSequenceLength)
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
