#!/usr/bin/env node

/* eslint-disable */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    if (!consoleSpy){
      consoleSpy = sinon.spy(console)
    }
  })

  afterEach(() => {
    consoleSpy.log.resetHistory()
  })
  
  it('sendPaymentRequestToApi(100, 20) logs the correct value to console', () => {

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy.log);
    sinon.assert.calledWithExactly(consoleSpy.log, 'The total is: 120');
  });

  it('sendPaymentRequestToApi(10, 10) logs the correct value to console', () => {

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy.log);
    sinon.assert.calledWithExactly(consoleSpy.log, 'The total is: 20');
  });
});
