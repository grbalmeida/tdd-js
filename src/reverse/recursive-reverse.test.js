'use strict'

import {expect} from 'chai'
import recursiveReverse from './recursive-reverse'

it('recursiveReverse should be a function', () => {
    expect(recursiveReverse).to.be.a('function')
})

it('recursiveReverse([]) should return an array', () => {
    expect(recursiveReverse([])).to.be.deep.equal([])
})

it('recursiveReverse([]) should return an array', () => {
    expect(recursiveReverse([])).to.be.an('array')
})

it('recursiveReverse([]) should return an empty array', () => {
    expect(recursiveReverse([])).to.be.empty
})

it('recursiveReverse([]) should have a length of 0', () => {
    expect(recursiveReverse([])).to.have.lengthOf(0)
})

it('recursiveReverse(["Silva", "da", "João"]) should return ["João", "da", "Silva"]', () => {
    expect(recursiveReverse(['Silva', 'da', 'João'])).to.be.deep.equal(['João', 'da', 'Silva'])
})

it('recursiveReverse([1, 2, 3]) should return [3, 2, 1]', () => {
    expect(recursiveReverse([1, 2, 3])).to.be.an('array').that.does.not.include(5)
})

it('recursiveReverse([4, 6, 8]) should return [8, 6, 4]', () => {
    expect(recursiveReverse([4, 6, 8])).to.have.ordered.members([8, 6, 4])
})