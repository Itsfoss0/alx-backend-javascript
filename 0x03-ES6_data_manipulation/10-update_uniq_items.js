export default function updateUniqueItems(mapEntries) {
  if (mapEntries instanceof Map) {
    mapEntries.forEach((value, key) => {
      if (value === 1) {
        mapEntries.set(key, 100);
      }
    });
    return mapEntries;
  }
  throw new TypeError('Cannot process');
}
