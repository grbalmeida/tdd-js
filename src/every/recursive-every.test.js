'use strict'

import {expect} from 'chai'
import recursiveEvery from './recursive-every'

const names = ['Elisa', 'Maria', 'André']

it('recursiveEvery should be a function', () => {
    expect(recursiveEvery).to.be.a('function')
})

it('recursiveEvery(names, item => item.length === 5) should return true', () => {
    const result = recursiveEvery(names, item => item.length === 5)
    expect(result).to.be.ok
})

it('recursiveEvery(names, item => item.startsWith("E")) should return false', () => {
    const result = recursiveEvery(names, item => item.startsWith('E'))
    expect(result).to.be.false
})

it('recursiveEvery(names, item => item.indexOf("a") !== -1) should return false', () => {
    const result = recursiveEvery(names, item => item.indexOf('a') !== -1)
    expect(result).to.not.be.ok
})

it('recursiveEvery([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
    const result = recursiveEvery([1, 2, 3], (item, index, array) => array.length === 3)
    expect(result).to.be.true
})

it('recursiveEvery([1, 2, 3], (item, index, array) => index <= 2) should return true', () => {
    const result = recursiveEvery([1, 2, 3], (item, index, array) => index <= 2)
    expect(result).to.be.ok
})

it('recursiveEvery([1, 2, 3, 6, 8], (item, index, array) => array.length === 5)', () => {
    const result = recursiveEvery([1, 2, 3, 6, 8], (item, index, array) => array.length < 10)
    expect(result).to.be.equal(true)
})