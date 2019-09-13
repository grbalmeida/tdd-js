'use strict'

import {expect} from 'chai'
import filter from './filter'
import employees from './employees'

it('filter should be a function', () => {
    expect(filter).to.be.a('function')
})

it('employees should be a function', () => {
    expect(employees).to.be.a('function')
})

it('employees should be a object', () => {
    expect(employees()).to.be.a('array')
})

it('filter([1, 2, 3], (item) => item) should return [1, 2, 3]', () => {
    const result = filter([1, 2, 3], (item) => item)
    expect(result).to.be.deep.equal([1, 2, 3])
})

it('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
    const result = filter([0, 1, 2], (item) => item)
    expect(result).to.be.deep.equal([1, 2])
})

it('filter([1, 2, 3], (item) => item < 2) should return [1]', () => {
    const result = filter([1, 2, 3], (item) => item < 2)
    expect(result).to.be.deep.equal([1])
})

it('filter([1, 2, 3, 5], (item, index) => item === index + 1) should return [1, 2, 3]', () => {
    const result = filter([1, 2, 3, 5], (item, index) => item === index + 1)
    expect(result).to.be.deep.equal([1, 2, 3])
})

it('filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))', () => {
    const before = filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))
    expect(before).to.be.deep.equal([1, 2, 3, 5])
})

it('filter(employees(), (employee) => employee.age === 20) should be an object that have keys name, age, salary', () => {
    const result = filter(employees(), employee => employee.age === 20)[0]
    expect(result).to.be.an('object').that.has.all.keys('name', 'age', 'salary');
})

it('filter(employees(), (employee) => employee.age === 20) should return {name: "Ana", age: 20, salary: 1500}', () => {
    const result = filter(employees(), employee => employee.age === 20)[0]
    expect(result).to.be.deep.equal({name: 'Ana', age: 20, salary: 1500})
})

it('filter(employees(), (employee) => employee.salary > 2000) should return 2 employees', () => {
    const result = filter(employees(), employee => employee.salary > 2000)
    expect(result).to.have.lengthOf(2)
})

it('filter(employees(), (employee) => employee.name.endsWith("a")) should return 3 employees', () => {
    const result = filter(employees(), employee => employee.name.endsWith('a'))
    expect(result).to.have.lengthOf(3)
})

it('filter(employees(), (employee) => employee.salary >= 2300) should return 2 employees', () => {
    const firstEmployee = employees()[3]
    const secondEmployee = employees()[4]
    const result = filter(employees(), employee => employee.salary >= 2300)
    expect(result).to.have.deep.members([firstEmployee, secondEmployee])
})