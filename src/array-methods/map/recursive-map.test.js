'use strict'

import {expect} from 'chai'
import recursiveMap from './recursive-map'

it('recursiveMap should be a function', () => {
    expect(recursiveMap).to.be.a('function')
})

it('recursiveMap([1, 2], (item) => item) should be return [1, 2]', () => {
    expect(recursiveMap([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('recursiveMap([3, 4], (item) => item) should be return [3, 4]', () => {
    expect(recursiveMap([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('recursiveMap([1, 2], (item) => item + 1) shoud return [2, 3]', () => {
    expect(recursiveMap([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('recursiveMap([4, 6], (item) => item + 1) should return [5, 7]', () => {
    expect(recursiveMap([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('recursiveMap([4, 9], (item) => Math.sqrt(item)) should return [2, 3]', () => {
    expect(recursiveMap([4, 9], (item) => Math.sqrt(item))).to.be.deep.equal([2, 3])
})

it('recursiveMap([5, 7], (item) => Math.pow(item, 2)) should return [25, 49]', () => {
    expect(recursiveMap([5, 7], (item) => Math.pow(item, 2))).to.be.deep.equal([25, 49])
})

it('recursiveMap([1.1, 2.9], (item) => Math.ceil(item)) should return [2, 3]', () => {
    expect(recursiveMap([1.1, 2.9], (item) => Math.ceil(item))).to.be.deep.equal([2, 3])
})

it('recursiveMap([], (item) => item) should return []', () => {
    expect(recursiveMap([], (item) => item)).to.be.deep.equal([])
})

it('recursiveMap(["ana", "bruno"], (item) => item.toUpperCase()) should return ["ANA", "BRUNO"', () => {
    expect(recursiveMap(['ana', 'bruno'], (item) => item.toUpperCase())).to.be.deep.equal(['ANA', 'BRUNO'])
})

it('recursiveMap([1, 2], (item, index) => index) should return [0, 1]', () => {
    expect(recursiveMap([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('recursiveMap([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
    expect(recursiveMap([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('recursiveMap should throw an error with message "func is not a function"', () => {
    expect(recursiveMap).to.throw(TypeError, /func is not a function/)
})