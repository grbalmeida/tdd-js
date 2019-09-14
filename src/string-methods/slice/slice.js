'use strict'

const slice = (string, start = 0, end) => {
  let new_string = ''
  let length = string.length

  if (end && end > 0) {
    length = end
  }

  if (length > string.length) {
    length = string.length
  }

  if (start < 0) {
    start = length + start
  }

  if (end < 0) {
    length = length + end
  }

  for (let i = start; i < length; i++) {
    new_string += string[i]
  } 

  return new_string
}

export default slice
