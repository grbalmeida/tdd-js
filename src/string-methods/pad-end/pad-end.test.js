'use strict'

import { expect } from 'chai'
import padEnd from './pad-end'

it('Should padEnd to be a function', () => {
  expect(padEnd).to.be.a('function')
})

it('Should throw a RangeError if maxLength is Infinity', () => {
  try {
    padEnd('str', Infinity)
  } catch (e) {
    expect(e.message).to.be.equal('Invalid string length')
  }
})

it('Should fill with a space if fillString parameter is not passed', () => {
  expect(padEnd('str', 5)).to.be.equal('str  ')
  expect(padEnd('str', 6)).to.be.equal('str   ')
  expect(padEnd('test', 8)).to.be.equal('test    ')
  expect(padEnd('200', 5)).to.be.equal('200  ')
})

it('Should fill string if fillString parameter is single character', () => {
  expect(padEnd('str', 5, '.')).to.be.equal('str..')
  expect(padEnd('test', 10, '-')).to.be.equal('test------')
  expect(padEnd('foo', 4, '/')).to.be.equal('foo/')
})

it('Should fill string if fillString parameter is greater than a single character', () => {
  expect(padEnd('Breaded Mushrooms', 25, '.')).to.be.equal('Breaded Mushrooms........')
})

it('Should return string itself if fillString parameter is empty string', () => {
  expect(padEnd('str', 10, '')).to.be.equal('str')
  expect(padEnd('test', 7, '')).to.be.equal('test')
  expect(padEnd('foo', 5, '')).to.be.equal('foo')
})

it('Should return string itself if maxLength parameter is less than or equal to string length', () => {
  expect(padEnd('str', 3)).to.be.equal('str')
  expect(padEnd('test', 3)).to.be.equal('test')
  expect(padEnd('foo', -1)).to.be.equal('foo')
  expect(padEnd('200', 0)).to.be.equal('200')
  expect(padEnd('str', 3, '.')).to.be.equal('str')
  expect(padEnd('foo', -2, '/')).to.be.equal('foo')
  expect(padEnd('test', 0, '-')).to.be.equal('test')
})

it('Should fill string if fillString parameter is boolean', () => {
  expect(padEnd('str', 10, true)).to.be.equal('strtruetru')
  expect(padEnd('test', 15, false)).to.be.equal('testfalsefalsef')
})

it('Should fill string if maxLength parameter is numeric string', () => {
  expect(padEnd('str', '5', '.')).to.be.equal('str..')
  expect(padEnd('test', '8', '-')).to.be.equal('test----')
  expect(padEnd('foo', 10, 'T')).to.be.equal('fooTTTTTTT')
})

it('Should return the string itself if only te string is passed as parameter', () => {
  expect(padEnd('str')).to.be.equal('str')
  expect(padEnd('foo')).to.be.equal('foo')
  expect(padEnd('test')).to.be.equal('test')
})
