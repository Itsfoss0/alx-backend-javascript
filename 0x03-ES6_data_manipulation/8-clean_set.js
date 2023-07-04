/*
 * function named cleanSet that returns a string
 * of all the set values that start with a
 * specific string (startString).It accepts two arguments:
 *  a set (Set) and a startString (String)
*/

export default function cleanSet(set, startString) {
  // validate the types of the arguments at runtime
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
