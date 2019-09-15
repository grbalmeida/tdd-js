'use strict'

// This function does not cover the entire unicode table

const toLowerCase = (string) => {
  const converter = {}
  let new_string = ''

  for (let i = 65; i <= 90; i++) {
    converter[String.fromCodePoint(i)] = String.fromCodePoint(i + 32)
  }

  for (let i = 192; i <= 223; i++) {
    if (i !== 215 && i !== 223) {
      converter[String.fromCodePoint(i)] = String.fromCodePoint(i + 32)
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (converter[string[i]] !== undefined) {
      new_string += converter[string[i]]
    } else {
      new_string += string[i]
    }
  }

  return new_string
}

export default toLowerCase
