function sumFibs(num) {
  if (!num || typeof num !== 'number' || num <= 0) return false;
  if (num === 1) return 2;
  let i = 1;
  let j = 1;
  let nextNumber = 0;
  let sum = 0;
  do {
    nextNumber = i + j;
    i = j;
    j = nextNumber;
    if (nextNumber % 2 !== 0) {
      sum += nextNumber;
    }
  } while (num > (i + j));
  return (sum + 2);
}

function cacheFunction(memoizedFn) {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    }
    cache[num] = memoizedFn(num);
    return cache[num];
  };
}

export { sumFibs, cacheFunction };
