import { gameEngine } from '../index.js'
import { nameStore } from '../index.js'

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const generatePrimeNumberQuestion = () => {
  const question = nameStore.getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const primeNumberGame = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestion: generatePrimeNumberQuestion,
}

const start = () => gameEngine(primeNumberGame)

export { start }
