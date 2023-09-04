#!/usr/bin/env node

/* eslint-disable consistent-return */
function calculateNumber(type, numA, numB) {
  try {
    const roundedA = Math.round(numA);
    const roundedB = Math.round(numB);
    if (type === 'SUM') {
      return roundedA + roundedB;
    } if (type === 'MULTIPLY') {
      return roundedA * roundedB;
    } if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    } if (type === 'DIVIDE') {
      if (roundedB === 0) {
        return 'Error';
      }
      return (roundedA / roundedB);
    }
  } catch (err) {
    return (err);
  }
}

module.exports = calculateNumber;
