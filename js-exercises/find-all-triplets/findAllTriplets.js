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
  for (const [iIndex, iVal] of arr.slice(0, arr.length - 2).entries()) {
    for (const [jIndex, jVal] of arr.slice(0, arr.length - 1).entries()) {
      for (const [kIndex, kVal] of arr.entries()) {
        // eslint-disable-next-line max-len
        if (((iVal + jVal + kVal) === sum) && (iIndex !== jIndex) && (iIndex !== kIndex) && (jIndex !== kIndex)) {
          const array = [iVal, jVal, kVal].sort();
          if (!JSON.stringify(resultArray).includes(JSON.stringify(array))) {
            resultArray.push(array);
          }
        }
      }
    }
  }
  return resultArray;
}

export { findAllTriplets };
