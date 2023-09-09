#!/usr/bin/env node

/* eslint-disable */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(calculateNumberSpy)
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20)
    calculateNumberSpy.restore()
  });
});
