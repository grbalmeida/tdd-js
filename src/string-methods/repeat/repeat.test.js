'use strict'

import { expect } from 'chai'
import repeat from './repeat'

it('repeat should be a function', () => {
    expect(repeat).to.be.a('function')
})

it('Should throw a RangeError if the count is negative', () => {
    try {
        repeat('str', -1)
    } catch (e) {
        expect(e.message).to.be.equal('Invalid count value')
    }
})

it('Should throw a RangeError if the count is negative', () => {
    try {
        repeat('str', Infinity)
    } catch (e) {
        expect(e.message).to.be.equal('Invalid count value')
    }
})

it('Should return an empty string if count equals 0', () => {
    expect(repeat('str', 0)).to.be.equal('')
})

it('Should return an empty string if count is less than 1', () => {
    expect(repeat('str', 0.1)).to.be.equal('')
    expect(repeat('str', 0.4)).to.be.equal('')
    expect(repeat('strstr', 0.9)).to.be.equal('')
})

it('Should return a repeating string', () => {
    expect(repeat('str', 1)).to.be.equal('str')
    expect(repeat('test', 2)).to.be.equal('testtest')
    expect(repeat('\nbreak line\n', 2)).to.be.equal('\nbreak line\n\nbreak line\n')
    expect(repeat('ABc', 3)).to.be.equal('ABcABcABc')
})

it('Should return a repeating string if count is a floating point number', () => {
    expect(repeat('str', 1.1)).to.be.equal('str')
    expect(repeat('test', 2.9)).to.be.equal('testtest')
})

it('Should return an empty string if count is not a number', () => {
    expect(repeat('str', {})).to.be.equal('')
    expect(repeat('str', [])).to.be.equal('')
    expect(repeat('str', false)).to.be.equal('')
    expect(repeat('str', NaN)).to.be.equal('')
})

it('Should return a repeating string if count is an array with a single numeric element', () => {
    expect(repeat('str', [1])).to.be.equal('str')
    expect(repeat('str', ['2'])).to.be.equal('strstr')
    expect(repeat('str', ['1', '2'])).to.be.equal('')
})

it('Should return string itself if count equals true', () => {
    expect(repeat('str', true)).to.be.equal('str')
    expect(repeat('test', [true])).to.be.equal('')
})