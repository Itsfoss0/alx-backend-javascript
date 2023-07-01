#!/usr/bin/env node

/* eslint-disable */

/*
 * Its not about the money money money
 * Implementing the pricing class
 * Jessie J (^_^)
*/

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('No counterfeit here! You could be arrrested!');
    }
    this._amount = amount;
    this._currency = currency;
  }

  /* get that money */
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  /* setter for the objects */

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('No counterfeit here!');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and Conversion rates should be numbers');
    }
    return (amount * conversionRate);
  }
}
