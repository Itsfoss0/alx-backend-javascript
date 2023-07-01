/* eslint-disable valid-typeof */
/* eslint-disable no-underscore-dangle */

function validateType(variable, type) {
  return (typeof variable === type);
}
export default class HolbertonClass {
  constructor(size, location) {
    if (!validateType(size, 'number')) {
      throw new TypeError('size must be a string');
    }
    if (!validateType(location, 'string')) {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  /* define getter for the object's props */
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  /* define setters for the object's props */
  set size(newSize) {
    if (!validateType(newSize, 'number')) {
      throw new TypeError('size should  be a number');
    }
    this._size = newSize;
  }

  set location(newLocation) {
    if (!validateType(newLocation, 'string')) {
      throw new TypeError('location should be a string');
    }
    this._location = newLocation;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
