'use strict'

import {expect} from 'chai'
import recursiveReduce from './recursive-reduce'

it('recursiveReduce should be a function', () => {
    expect(recursiveReduce).to.be.a('function')
})

it('recursiveReduce(["J", "o", "s", "é"], (acc, item) => acc + item) should return "José"', () => {
    const result = recursiveReduce(['J', 'o', 's', 'é'], (acc, item) => acc + item)
    expect(result).to.be.equal('José')
})

it('recursiveReduce([1, 1, 1, 1, 1], (acc, item, index, array) => acc + array.length, 10) should return 35', () => {
    const result = recursiveReduce([1, 1, 1, 1, 1], (acc, item, index, array) => acc + array.length, 10)
    expect(result).to.be.equal(35)
})