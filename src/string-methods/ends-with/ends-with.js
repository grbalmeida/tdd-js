const endsWith = (string, searchString, endPosition) => {
  let length = string.length

  if (!isNaN(+endPosition)) {
    length = +endPosition
  }

  if (length > string.length) {
    length = string.length
  }

  const differenceBetweenStringLength = length - searchString.length

  let string_part = ''

  for (let i = differenceBetweenStringLength; i < length; i++) {
    string_part += string[i]
  }

  return string_part === searchString
}

export default endsWith
