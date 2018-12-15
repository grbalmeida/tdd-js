'use strict'

import {expect} from 'chai'
import recursiveFind from './recursive-find'

const people = [
    {name: 'Andressa'},
    {name: 'Bernardo'},
    {name: 'Rogério'},
    {name: 'Sônia'},
    {name: 'Roger'}
]

it('recursiveFind should be a function', () => {
    expect(recursiveFind).to.be.a('function')
})

it('recursiveFind([], (item) => item) should return undefined', () => {
    expect(recursiveFind([])).to.be.undefined
})

it('recursiveFind(people, (item) => item.name === "Andressa") should return Andressa', () => {
    const firstPerson = people.filter(person => person.name === 'Andressa')[0]
    expect(recursiveFind(people, (item) => item)).to.be.deep.equal(firstPerson)
})

it('recursiveFind(people, (item, index) => index === 4) should return {Roger}', () => {
    const roger = people.filter((person, index) => index === 4)[0]
    expect(recursiveFind(people, (item, index) => index === 4)).to.be.deep.equal(roger)
})

it('recursiveFind(people, (item, index, array) => array[index].name === "Sônia") should return {Sônia}', () => {
    const sonia = people.filter((person, index, array) => array[index].name === 'Sônia')[0]
    const result = recursiveFind(people, (item, index, array) => array[index].name === 'Sônia')
    expect(result).to.be.deep.equal(sonia)
})