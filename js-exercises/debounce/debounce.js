function debounce(fn, timeInMs) {
  let timeoutId;
  return function internal(...args) {
    if (timeoutId) { clearTimeout(timeoutId); }
    timeoutId = setTimeout(() => { fn(...args); }, timeInMs);
  };
}

export { debounce };
