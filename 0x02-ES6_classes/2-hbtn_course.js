#!/usr/bin/env node

/* Eslint could kill me here */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-sequences */

/*
 * Lets go dig some graves
*/

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name,
    this._length = length;
    this._students = students;
  }

  /* define the getters for the class */
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  /*
    * Settters used to trip me up,
    * or should I say, set me up
  */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newlength;
  }

  set students(studArray) {
    if (!Array.isArray(studArray)) {
      throw new TypeError('Students must be an array');
    }
    this._students = studArray;
  }
}
