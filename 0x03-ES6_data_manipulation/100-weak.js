export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const total = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, total + 1);
  if (total >= 5) {
    throw new Error('Endpoint load is high');
  }
  return total;
}
