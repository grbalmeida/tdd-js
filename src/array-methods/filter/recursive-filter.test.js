'use strict'

import {expect} from 'chai'
import recursiveFilter from './recursive-filter'

const htmlTags = ['<h1>', '<body>', '<head>']
const dates = ['10/10/2010', 'aa/10/2010', '99/10/2010']
const cpfs = ['123.123.123-12', 'a123.123.123-12', '123.123.123-12a']
const urls = ['http://google.com', 'google.com', 'https://']

it('recursiveFilter should be a function', () => {
    expect(recursiveFilter).to.be.a('function')
})

it('recursiveFilter(htmlTags, regex) should return ["<h1>"]', () => {
    const regex = /^\<h[1-6]{1}\>$/gmi
    expect(recursiveFilter(htmlTags, htmlTag => htmlTag.match(regex))).to.be.deep.equal(['<h1>'])
})

it('recursiveFilter(dates, regex) should return ["10/10/2010"]', () => {
    const regex = /^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-2]\/\d{4}$/gmi
    expect(recursiveFilter(dates, date => date.match(regex))).to.be.deep.equal(['10/10/2010'])
})

it('recursiveFilter(cpfs, regex) should return ["123.123.123-12"]', () => {
    const regex = /^(\d{3}\.){2}\d{3}\-\d{2}$/gmi
    expect(recursiveFilter(cpfs, cpf => cpf.match(regex))).to.be.deep.equal(['123.123.123-12'])
})

it('recursiveFilter(urls, regex) should return ["http://google.com"]', () => {
    const regex = /^https?\:\/\/[a-z0-9]+\.[a-z0-9]+(\.[a-z0-9]+)?$/gmi
    expect(recursiveFilter(urls, url => url.match(regex))).to.be.deep.equal(['http://google.com'])
})