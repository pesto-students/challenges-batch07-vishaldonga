import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('Function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = Promise.resolve(33);
    const p2 = Promise.resolve(66);
    const p3 = 99;
    const p4 = Promise.reject(new Error('an error'));
    return expect(allSettled([p1, p2, p3, p4])).resolves.toEqual([
      33,
      66,
      99,
      new Error('an error'),
    ]);
  });
});
