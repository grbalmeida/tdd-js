'use strict'

import { expect } from 'chai'
import endsWith from './ends-with'

it('Should endsWith be a function', () => {
  expect(endsWith).to.be.a('function')
})

it('endsWith should return a boolean', () => {
  expect(endsWith('str', 'r')).to.be.a('boolean')
  expect(endsWith('str', 'z')).to.be.a('boolean')
})

it('Should return true if the searchString parameter is equal to the end of the string', () => {
  expect(endsWith('To be, or not to be, that is the question.', 'question.'))
  expect(endsWith('str', 'r')).to.be.true
  expect(endsWith('str', 'tr')).to.be.true
  expect(endsWith('str', 'str')).to.be.true
  expect(endsWith('foo', 'o')).to.be.true
  expect(endsWith('test', 'est')).to.be.true
})

it('Should return false if searchString parameter is not equal to end of string', () => {
  expect(endsWith('To be, or not to be, that is the question.', 'to be')).to.be.false
  expect(endsWith('str', 'z')).to.be.false
  expect(endsWith('foo', 'l')).to.be.false
  expect(endsWith('test', 'EST')).to.be.false
})

it('Should return true if the searchString parameter is equal to the end of the string and the endPosition parameter is passed', () => {
  expect(endsWith('To be, or not to be, that is the question.', 'to be', 19))
  expect(endsWith('str', 't', 2)).to.be.true
  expect(endsWith('test', 's', 3)).to.be.true
  expect(endsWith('my city', ' ', 3)).to.be.true
  expect(endsWith('my state', 't', 5)).to.be.true
  expect(endsWith('my state', 'state', 8)).to.be.true
  expect(endsWith('my state', 'state', 11)).to.be.true
})

it('Should return false if searchString parameter is not equal to end of string and endPosition parameter is passed', () => {
  expect(endsWith('my city', 'city', 3)).to.be.false
  expect(endsWith('my state', 'state', 7)).to.be.false
})

it('Should return true if the endPosition parameter is greater than or equal to string length', () => {
  expect(endsWith('my state', 'my state', 8)).to.be.true
  expect(endsWith('my state', 'e', 9)).to.be.true
  expect(endsWith('my state', 'te', 10)).to.be.true
  expect(endsWith('my state', 'state', 20)).to.be.true
})
