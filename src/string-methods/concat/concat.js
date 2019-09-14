'use strict'

const concat = (string, ...strings) => {
  let new_string = string

  for (let string of strings) {
    new_string += string
  }

  return new_string
}

export default concat
