#!/usr/bin/env node

/* test the calc module */

const assert = require("chai").assert;
const calculateNumber = require('./2-calcul_chai');

describe('testing the calculator', () => {
  it('should add Numbers correctly', () => {
    assert.equal(calculateNumber('SUM', 2, 4), 6);
  });
  it('should add floating point numbers correctly', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should subtract numbers correctly', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should Divide numbers correctly', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should raise an error when dividing with zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
