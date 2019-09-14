'use strict'

import { expect } from 'chai'
import trim from './trim'

it('Should trim be a function', () => {
  expect(trim).to.be.a('function')
})

it('Should remove spaces on right side', () => {
  expect(trim('str  ')).to.be.equal('str')
  expect(trim('foo     ')).to.be.equal('foo')
  expect(trim('my state     ')).to.be.equal('my state')
  expect(trim('my city - ')).to.be.equal('my city -')
})

it('Should remove spaces on left side', () => {
  expect(trim('     str')).to.be.equal('str')
  expect(trim('   foo')).to.be.equal('foo')
  expect(trim('    my state')).to.be.equal('my state')
  expect(trim(' - my city')).to.be.equal('- my city')
})

it('Should remove spaces on both sides', () => {
  expect(trim('   str    ')).to.be.equal('str')
  expect(trim('   foo    ')).to.be.equal('foo')
  expect(trim('   my  state  ')).to.be.equal('my  state')
})
