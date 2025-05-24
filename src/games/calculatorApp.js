import { gameEngine } from '../index.js'
import { nameStore } from '../index.js'

const randomCalculatorQuestion = () => {
  const operatorRange = ['+', '-', '*']
  const randomIndex = nameStore.getRandomNumber(0, operatorRange.length)
  const a = nameStore.getRandomNumber(0, 10)
  const b = nameStore.getRandomNumber(0, 10)
  const operator = operatorRange[randomIndex]

  let generatedQuestion

  switch (operator) {
    case '+':
      generatedQuestion = a + b
      break
    case '-':
      generatedQuestion = a - b
      break
    case '*':
      generatedQuestion = a * b
      break
  }

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: String(generatedQuestion),
  }
}

const calculatorGame = {
  description: 'What is the result of the expression?',
  generateQuestion: randomCalculatorQuestion,
}

const start = () => gameEngine(calculatorGame)

export { start }
