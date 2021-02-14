function curry(fn) {
  return function initialCall(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function callBack(...extraArgs) {
      return initialCall.apply(this, args.concat(extraArgs));
    };
  };
}

export {
  curry,
};
