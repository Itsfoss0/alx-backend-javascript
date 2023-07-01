/* eslint-disable no-underscore-dangle */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw new TypeError('Provide valid dimensions and number of floors');
    }
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(feet) {
    if (typeof feet !== 'number') {
      throw new TypeError('Provide Valid Dimensions');
    }
    this._sqft = feet;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('Provide valid number of floors');
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
