import { nameStore } from '../index.js'

const start = () => {
  console.log('Welcome to the Brain Games!')
  nameStore.askName()
}

export { start }
