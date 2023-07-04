export default function setFromArray(inputArray) {
  if (Array.isArray(inputArray)) {
    return new Set(inputArray);
  }
  throw new TypeError(`${inputArray} is not exactly an array is it?`);
}
