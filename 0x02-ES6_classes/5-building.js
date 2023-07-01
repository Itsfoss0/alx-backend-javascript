/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/*
 * some building and construction
 * building some skycrappers
 * and warn people to evacuate the buildings
 * using static methods
*/

export default class Building {
  constructor(sqft) {
    if (new.target === Building && this.evacuationWarningMessage !== undefined) {
      if (typeof sqft !== 'number') {
        throw new TypeError('Provide valid dimensions');
      }
      this._sqft = sqft;
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(dimensions) {
    if (typeof dimensions !== 'number') {
      throw new TypeError('Provide valid dimensions');
    }
    this._sqft = dimensions;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
