#!/usr/bin/env node

/* test the calc module */
/* eslint-disable */
const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');
const  expect  = assert.expect;

describe('Testing  calculateNumber feature ', () => {
  it('Add Floating Point Numbers correctly', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
  })
  it('Add whole Numbers correctly', ()=> {
    expect(calculateNumber('SUM', 4, 5)).to.equal(9)
  })
  it('Subtract Numbers correctly', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)

  })
  it('Divide Numbers correctly', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)

  })
  it('Handle Zero division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')

  })
});
