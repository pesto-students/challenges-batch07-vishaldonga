function chunkArrayInGroups(array, chunkSize) {
  if (typeof chunkSize !== 'number' || !Array.isArray(array) || chunkSize < 0) {
    return 'Invalid Arguments';
  }
  if (!array.length) return [];
  const multiDimenArray = [];
  // Making a shallow copy to not to mutate data in array
  const cloneArray = [...array];
  while (cloneArray.length) {
    multiDimenArray.push(cloneArray.splice(0, chunkSize));
  }
  return multiDimenArray;
}

export {
  chunkArrayInGroups,
};
