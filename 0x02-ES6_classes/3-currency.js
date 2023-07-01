#!/usr/bin/env node

/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  /* Getter first */
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  /* then setters */

  set code(theCode) {
    if (typeof theCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = theCode;
  }

  set name(theName) {
    if (typeof theName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = theName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
