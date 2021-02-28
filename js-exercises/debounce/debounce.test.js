import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  test('Debounce function should be called once here', () => {
    const func = jest.fn();
    const debouncedFn = debounce(func, 1000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(func).toHaveBeenCalledTimes(0);

    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
