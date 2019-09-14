const repeat = (string, count) => {
    let new_string = ''

    count = Math.floor(count)

    if (count < 0 || count == Infinity) {
        throw new RangeError('Invalid count value')
    }

    for (let i = 0; i < count; i++) {
        new_string += string
    }

    return new_string
}

export default repeat
