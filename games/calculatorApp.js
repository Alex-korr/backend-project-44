import { gameEngine } from '../src/index.js'

const randomCalculatorQuestion = () => {
  const operatorRange = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operatorRange.length)
  const a = Math.floor(Math.random() * 10)
  const b = Math.floor(Math.random() * 10)
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
