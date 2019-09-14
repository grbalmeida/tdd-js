'use strict'

import {expect} from 'chai'
import lottery from './lottery'

it('lottery should be a function', () => {
    expect(lottery).to.be.a('function')
})

it('lottery() should be an array', () => {
    expect(lottery()).to.be.an('array')
})

it('lottery() should have a length of 6', () => {
    expect(lottery()).to.have.lengthOf(6)
})
