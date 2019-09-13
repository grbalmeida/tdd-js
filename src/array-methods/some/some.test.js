'use strict'

import {expect} from 'chai'
import some from './some'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it('some([], item => item) should return false', () => {
    expect(some([], item => item)).to.not.be.ok
})

it('some([1, 2], item => item) should return true', () => {
    expect(some([1, 2], item => item)).to.be.ok
})

it('some([0], item => item) should return false', () => {
    expect(some([0], item => item)).to.be.false
})

it('some([10, 20, 30], (item, index) => index) should return true', () => {
    expect(some([10, 20, 30], (item, index) => index)).to.be.true
})

it('some([{name: "José"}], (item, index, array) => array[0].name === "Josué") should return false', () => {
    const result = some([{name: 'José'}], (item, index, array) => array[0].name === 'Josué')
    expect(result).to.be.false
})