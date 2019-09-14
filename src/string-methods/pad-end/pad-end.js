'use strict'

const padEnd = (string, maxLength, fillString = ' ') => {
  if (maxLength === Infinity) {
    throw new RangeError('Invalid string length')
  }

  fillString = '' + fillString

  let new_string = string
  let current_index = 0

  while (new_string.length < maxLength && fillString !== '') {
    if (fillString[current_index] === undefined) {
      current_index = 0
    }

    new_string += fillString[current_index]
    current_index++

  }

  return new_string
}

export default padEnd
