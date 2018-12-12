'use strict'

const recursiveReverse = (arr) => {
    return arr.length === 0
        ? []
        : [arr.slice(-1)[0], ...recursiveReverse(arr.slice(0, -1))]
}

export default recursiveReverse