#!/usr/bin/env node

/* test the calc module */

const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('Testing the calculator', () => {
    it('It should add Numbers correctly', () => {
        assert.equal(calculateNumber('ADD', 2, 4), 6)
    })
    it('It should add floating point numbers correctly', () => {
        assert.equal(calculateNumber('ADD', 1.4, 4.5), 6)
    })
    it('It should subtract numbers correctly', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
    it('It should Divide numbers correctly', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })
    it('It should raise an error when dividing with zero', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })
})
