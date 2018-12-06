'use strict'

import {expect} from 'chai'
import map from './map'

it('map should be a function', () => {
    expect(map).to.be.a('function')
})

it('map([1, 2], (item) => item) should be return [1, 2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('map([3, 4], (item) => item) should be return [3, 4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item) => item + 1) shoud return [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
})

it('map([4, 6], (item) => item + 1) should return [5, 7]', () => {
    expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
})

it('map([4, 9], (item) => Math.sqrt(item)) should return [2, 3]', () => {
    expect(map([4, 9], (item) => Math.sqrt(item))).to.be.deep.equal([2, 3])
})

it('map([5, 7], (item) => Math.pow(item, 2)) should return [25, 49]', () => {
    expect(map([5, 7], (item) => Math.pow(item, 2))).to.be.deep.equal([25, 49])
})

it('map([1.1, 2.9], (item) => Math.ceil(item)) should return [2, 3]', () => {
    expect(map([1.1, 2.9], (item) => Math.ceil(item))).to.be.deep.equal([2, 3])
})

it('map([], (item) => item) should return []', () => {
    expect(map([], (item) => item)).to.be.deep.equal([])
})

it('map(["ana", "bruno"], (item) => item.toUpperCase()) should return ["ANA", "BRUNO"', () => {
    expect(map(['ana', 'bruno'], (item) => item.toUpperCase())).to.be.deep.equal(['ANA', 'BRUNO'])
})

it('map([1, 2], (item, index) => index) should return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (item, index, array) => array) should return [[1, 2], [1, 2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
})

it('map should throw an error with message "func is not a function"', () => {
    expect(map).to.throw(TypeError, /func is not a function/)
})