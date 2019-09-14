'use strict'

import { expect } from 'chai'
import slice from './slice'

it('Should slice be a function', () => {
  expect(slice).to.be.a('function')
})

it('Should return string itself if start and end parameters are not passed', () => {
  expect(slice('str')).to.be.equal('str')
  expect(slice('foo')).to.be.equal('foo')
  expect(slice('test')).to.be.equal('test')
})

it('Should return an empty string if start parameter is greater than or equal to string length', () => {
  expect(slice('str', 3)).to.be.empty
  expect(slice('test', 4)).to.be.empty
  expect(slice('foo', 10)).to.be.empty
})

it('Should return part of string if start and end parameters are passed', () => {
  expect(slice('my city', 0, 1)).to.be.equal('m')
  expect(slice('my city', 0, 2)).to.be.equal('my')
  expect(slice('my city', 2, 3)).to.be.equal(' ')
  expect(slice('my city', 2, 4)).to.be.equal(' c')
})

it('Should return part of string if start and end parameters are numeric string', () => {
  expect(slice('my city', '0', '1')).to.be.equal('m')
  expect(slice('my city', '0', '2')).to.be.equal('my')
  expect(slice('my city', '2', '3')).to.be.equal(' ')
  expect(slice('my city', '2', '4')).to.be.equal(' c')
})

it('Should return part of the string if the end parameter is longer than the string length', () => {
  expect(slice('my city', 2, 10)).to.be.equal(' city')
  expect(slice('my state', 3, 12)).to.be.equal('state')
  expect(slice('I was born in Santa Monica', 5, 30)).to.be.equal(' born in Santa Monica')
})

it('Should return end of string if start parameter is negative', () => {
  expect(slice('test', -1)).to.be.equal('t')
  expect(slice('test', -2)).to.be.equal('st')
  expect(slice('test', -3)).to.be.equal('est')
  expect(slice('test', -4)).to.be.equal('test')
})

it('Should return end of string if start and end parameters are negative', () => {
  const string = 'I was born in Santa Monica'

  expect(slice(string, -3, -1)).to.be.equal('ic')
  expect(slice(string, -3, -2)).to.be.equal('i')
  expect(slice(string, -10, -1)).to.be.equal('nta Monic')
})

it('Should return an empty string if the end parameter is equal to or less than the start parameter', () => {
  expect(slice('my test', -2, -2)).to.be.empty
  expect(slice('my test', -2, -3)).to.be.empty
  expect(slice('my test', -2, -4)).to.be.empty
})

it('Should return from beginning to end of string if start parameter is positive and end parameter negative', () => {
  const string = 'I was born in Santa Monica'
  
  expect(slice(string, 0, -1)).to.be.equal('I was born in Santa Monic')
  expect(slice(string, 2, -1)).to.be.equal('was born in Santa Monic')
  expect(slice(string, 5, -5)).to.be.equal(' born in Santa M')
})
