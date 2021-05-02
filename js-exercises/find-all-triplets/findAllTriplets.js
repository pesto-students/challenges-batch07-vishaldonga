function findAllTriplets(arr, sum) {
  if (arr === undefined || !sum === undefined) {
    throw new Error('Missing Parameters');
  }
  if (typeof arr !== 'object' || typeof sum !== 'number' || arr === '{}') {
    throw new Error('Invalid Parameters');
  }
  if (arr.length < 3) {
    throw new Error('Invalid Parameters');
  }
  if (!arr.every((num) => typeof num === 'number')) {
    throw new Error('Invalid Parameters');
  }
  const resultArray = [];
  for (const i of arr.slice(0, arr.length - 2)) {
    for (const j of arr.slice(0, arr.length - 1)) {
      for (const k of arr) {
        if ((i + j + k) === sum) {
          const array = [i, j, k].sort();
          if (!JSON.stringify(resultArray).includes(JSON.stringify(array)) && array.length === 3) {
            resultArray.push(array);
          }
        }
      }
    }
  }
  return resultArray;
}

export { findAllTriplets };
