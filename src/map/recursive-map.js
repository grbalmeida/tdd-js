'use strict'

const recursiveMap = (arr, func) => {
    if(typeof func !== 'function') throw new TypeError('func is not a function')
    
    return (function mapInternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal
        return arrayInternal.length === 0 ? [] : [
            func(head, counter, arr),
            ...mapInternal(tail, counter + 1)
        ]
    })(arr, 0)
}

export default recursiveMap