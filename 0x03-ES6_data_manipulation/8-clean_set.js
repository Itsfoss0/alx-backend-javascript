/*
 * function named cleanSet that returns a string
 * of all the set values that start with a
 * specific string (startString).It accepts two arguments:
 *  a set (Set) and a startString (String)
*/

export default function cleanSet(set, startString) {
  // validate the types of the arguments at runtime
  if (!(set instanceof Set)) {
    throw new TypeError(`${set} is a valid set`);
  }
  if (typeof startString !== 'string') {
    throw new TypeError(`${startString} is not a valid string`);
  }
  const len = startString.length;
  if (len >= 1) {
    const stringArray = Array.from(set);
    const matchStrings = stringArray.filter((string) => string.slice(0, len) === startString);
    const stringPartTwo = matchStrings.map((string) => string.slice(len));
    return stringPartTwo.join('-');
  }
  return '';
}
