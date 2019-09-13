'use strict'

import {expect} from 'chai'
import find from './find'

it('find should be a function', () => {
    expect(find).to.be.a('function')
})

it('find([1, 2, 3], (item) => item === 1) should return 1', () => {
    expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
})

it('find([1, 2, 3], (item) => item === 2) should return 2', () => {
    expect(find([1, 2, 3], (item) => item === 2)).to.be.equal(2)
})

it('find([1, 2, 3], (item) => item === 4) should return undefined', () => {
    expect(find([1, 2, 3], (item) => item === 4)).to.be.undefined
})