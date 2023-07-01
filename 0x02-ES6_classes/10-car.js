/* eslint-disable no-underscore-dangle */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* Implement getters and setters */

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
