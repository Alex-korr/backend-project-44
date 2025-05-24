import { gameEngine } from '../index.js'
import { nameStore } from '../index.js'

const generateGCDQuestion = () => {
  const a = nameStore.getRandomNumber(1, 100)
  const b = nameStore.getRandomNumber(1, 100)

  let x = Math.abs(a)
  let y = Math.abs(b)
  let result = 0

  while (y !== 0) {
    [x, y] = [y, x % y]
  }

  result = x

  return {

    question: `${a} ${b}`,
    correctAnswer: String(result),

  }
}

const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  generateQuestion: generateGCDQuestion,
}

const start = () => gameEngine(gcdGame)

export { start }
