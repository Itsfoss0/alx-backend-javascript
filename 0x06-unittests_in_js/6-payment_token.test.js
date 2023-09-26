#!/usr/bin/env node

/* eslint-disable */

const sinon = require('sinon');
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI', (done) => {
    getPaymentTokenFromAPI(true)
      .then((resp) => {
        expect(resp.data).to.be.string;
        expect(resp.data).to.equals('Successful response from the API');
      });
    done()
      .catch((error) => {
        done(error);
      });
  });
});
