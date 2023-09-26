#!/usr/bin/env node

/* eslint-disable */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const consoleSpy = sinon.spy(console);
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWithExactly(consoleSpy.log, 'The total is: 10');

    // Restore the stub
    calculateNumberStub.restore();
  });
});
