/* unittest for the application */

const assert = require('assert')
const calculateNumber = require('./0-calcul')


describe('Testing 0-calcul module', () => {
    it('Adding two numbers', () => {
        assert.strictEqual(calculateNumber(3, 7), 10)
    })
    it('Rouding functionality', () => {
        assert.strictEqual(calculateNumber(2.1, 4), 6)
    })
    it('First argument is a double', () => {
        assert.strictEqual(calculateNumber(3.5, 2), 6)
    })
    it('Second argument is a double', () => {
        assert.strictEqual(calculateNumber(4, 9.0), 13)
    })
    it('Both arguments are doubles', () => {
        assert.strictEqual(calculateNumber(2.1, 2.1), 4)
    })
    it('Both arguments are integers', () => {
        assert.strictEqual(calculateNumber(2, 4), 6)
    })
})