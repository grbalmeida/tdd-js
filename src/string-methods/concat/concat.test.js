'use strict'

import { expect } from 'chai'
import concat from './concat'

it('Should concat be a function', () => {
  expect(concat).to.be.a('function')
})

it('Should return the string itself if no string is passed to be concatenated', () => {
  expect(concat('str')).to.be.equal('str')
  expect(concat('foo')).to.be.equal('foo')
  expect(concat('test')).to.be.equal('test')
})

it('Should concatenate two strings', () => {
  expect(concat('hello', 'world')).to.be.equal('helloworld')
  expect(concat('my', 'state')).to.be.equal('mystate')
  expect(concat('my', 'city')).to.be.equal('mycity')
})

it('Should concatenate three strings', () => {
  expect(concat('hello', ' ', 'world')).to.be.equal('hello world')
  expect(concat('my', ' ', 'city')).to.be.equal('my city')
  expect(concat('my', ' ', 'state')).to.be.equal('my state')
})

it('Should concatenate a string with a boolean', () => {
  expect(concat('str', true)).to.be.equal('strtrue')
  expect(concat('str', false)).to.be.equal('strfalse')
})

it('Should concatenate a string with a number', () => {
  expect(concat('str', -1)).to.be.equal('str-1')
  expect(concat('str', 0)).to.be.equal('str0')
  expect(concat('str', 1.344)).to.be.equal('str1.344')
})
