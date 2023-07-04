/*
 * check if all elements in an array are
 * also present in a set
*/

export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError(`${set} is not a valid set`);
  }
  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not a valid array`);
  }
  /*
    // We could implement this way ->
    for (const element of array) {
      if (!set.has(element)) {
        return false;
      }
    }

    return true;
    */
  const bools = array.map((elem) => set.has(elem));
  return bools.every((item) => Boolean(item));
}
