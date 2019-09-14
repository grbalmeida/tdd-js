'use strict'

const trim = (string) => {
  const characters = []
  let new_string = ''

  for (let i = 0; i < string.length; i++) {
    characters[i] = string[i]
  }

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] !== ' ') {
      break
    }

    characters[i] = ''
  }

  for (let i = characters.length - 1; i > 0; i--) {
    if (characters[i] !== ' ') {
      break
    }

    characters[i] = ''
  }

  for (let i = 0; i < characters.length; i++) {
    new_string += characters[i]
  }

  return new_string
}

export default trim
