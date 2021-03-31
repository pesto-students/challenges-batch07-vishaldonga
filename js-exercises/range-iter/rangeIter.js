function* generateSequence(lb, ub) {
  for (let num = lb; num <= ub; num += 1) {
    yield num;
  }
}
function rangeIter(lb, ub) {
  if (lb === undefined && ub === undefined) {
    throw new TypeError('Lower bound and upper bound values are required.');
  }
  if (ub === undefined) {
    throw new TypeError('Upper bound value is required.');
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(lb) || isNaN(ub)) {
    throw new TypeError('Upper bound and upper bound values needs to be a number.');
  }
  if (lb > ub) {
    return [];
  }
  const seqObject = generateSequence(lb, ub);
  const numArray = [];
  for (const num of seqObject) {
    numArray.push(num);
  }
  return numArray;
}

export { rangeIter };
