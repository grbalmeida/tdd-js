'use strict'

import {expect} from 'chai'
import every from './every'

it('every should be a function', () => {
    expect(every).to.be.a('function')
})

it('every([], item => item) should return true', () => {
    expect(every([], item => item)).to.be.ok
})

it('every([0, 2, 3], item => item) should return false', () => {
    expect(every([0, 2, 3], item => item)).to.not.be.ok
})

it('every([1, 2, 3], item => should return true)', () => {
    expect(every([1, 2, 3], item => item)).to.be.ok
})

it('every([1, 2, 3], item => item % 2 === 0 should return false)', () => {
    expect(every([1, 2, 3], item => item % 2 === 0)).to.not.be.ok
})

it('every([2, 4, 6], item => item % 2 === 0 should return true)', () => {
    expect(every([2, 4, 6], item => item % 2 === 0)).to.be.true
})

it('every([1.1, 1.2, -1.3], item => Math.abs(item) > 2) should return false', () => {
    expect(every([1.1, 1.2, -1.3], item => Math.abs(item) > 2)).to.be.false
})