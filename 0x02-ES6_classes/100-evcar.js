/* eslint-disable no-underscore-dangle */

import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, color, motor, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* implement getters and setter here */
  cloneCar() {
    return new super.constructor();
  }
}
