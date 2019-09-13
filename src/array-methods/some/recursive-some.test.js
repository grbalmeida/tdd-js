'use strict'

import {expect} from 'chai'
import recursiveSome from './recursive-some'

const names = [
    {name: 'Helena'},
    {name: 'José'},
    {name: 'Andressa'},
    {name: 'Maria'}
]

it('recursiveSome should be a function', () => {
    expect(recursiveSome).to.be.a('function')
})

it('recursiveSome([], item => item) should return false', () => {
    expect(recursiveSome([], item => item)).to.not.be.ok
})

it('recursiveSome([0], item => item) should return false', () => {
    expect(recursiveSome([0], item => item)).to.be.false
})

it('recursiveSome([undefined], item => item) should return false', () => {
    expect(recursiveSome([undefined], item => item)).to.not.be.ok
})

it('recursiveSome([1, 2, 3], (item, index) => index) should return true', () => {
    expect(recursiveSome([1, 2, 3], (item, index) => index)).to.be.equal(true)
})

it('recursiveSome(names, (item, index, array) => array[index].name === "Maria") should return true', () => {
    const result = recursiveSome(names, (item, index, array) => array[index].name === 'Maria')
    expect(result).to.be.true
})

it('recursiveSome(names, (item, index, array) => array[index].name === "Rosana") should return false', () => {
    const result = recursiveSome(names, (item, index, array) => array[index].name === 'Rosana')
    expect(result).to.not.be.true
})