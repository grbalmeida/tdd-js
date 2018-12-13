'use strict'

const lottery = () => {
    const min = 1
    const max = 60 
    const numbers = []
  
    while(numbers.length !== 6) {
      const newNumber = Math.floor(Math.random() * max) + min
      
      if(numbers.indexOf(newNumber) === - 1) {
        numbers.push(newNumber)
      }
    }
  
    return numbers.sort((a, b) => a - b)
}

export default lottery