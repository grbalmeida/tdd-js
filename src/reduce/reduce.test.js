'use strict'

import {expect} from 'chai'
import reduce from './reduce'

it('reduce should be a function', () => {
    expect(reduce).to.be.an('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
    const result = reduce([1, 2, 3], (acc, item) => acc + item , 0)
    expect(result).to.be.equal(6)
})

it('reduce([2, 3, 4], (acc, item) => acc + item, 0) should return 9', () => {
    const result = reduce([2, 3, 4], (acc, item) => acc + item, 0)
    expect(result).to.be.equal(9)
})

it('reduce(["R", "o", "s", "a", "n", "a"], (acc, item) => acc + item, "") should return "Rosana"', () => {
    const result = reduce(['R', 'o', 's', 'a', 'n', 'a'], (acc, item) => acc + item, "")
    expect(result).to.be.equal('Rosana')
})

it('reduce([1, 4, 5], (acc, item) => acc + item) should return 10', () => {
    const result = reduce([1, 4, 5], (acc, item) => acc + item)
    expect(result).to.be.equal(10)
})

it('reduce([1, 2], (acc, item) => { acc["number-" + item] = item; return acc}, {}) should return {...}', () => {
    const result = reduce([1, 2], (acc, item) => {acc['number-' + item] = item; return acc}, {})
    const object = {'number-1': 1, 'number-2': 2}
    expect(result).to.be.deep.equal(object)
})

it('reduce([10, 45], (acc, item) => { acc["number-" + item] = item; return acc}, {}) should return {...}', () => {
    const result = reduce([10, 45], (acc, item) => {acc['number-' + item] = item; return acc}, {})
    expect(result).to.be.an('object')
})

it('reduce([7, 9], (acc, item) => { acc["number-" + item] = item; return acc}, {}) should return {...}', () => {
    const result = reduce([7, 9], (acc, item) => {acc['number-' + item] = item; return acc}, {})
    expect(result).to.have.keys('number-7', 'number-9')
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
    const result = reduce([1, 2], (acc, item, index) => acc + index, 0)
    expect(result).to.be.equal(1)
})

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
    const result = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
    expect(result).to.be.equal(3)
})