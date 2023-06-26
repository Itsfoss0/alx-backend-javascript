#!/usr/bin/env node

/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */

export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const element of array) {
    newArray.push(`${appendString}${element}`);
  }

  return newArray;
}
