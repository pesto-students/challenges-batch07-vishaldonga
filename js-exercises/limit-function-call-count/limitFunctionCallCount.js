const limitFunctionCallCount = (callbackFn, callCount) => {
  let currentCallCount = 0;
  return (...args) => {
    if (currentCallCount < callCount) {
      currentCallCount += 1;
      return callbackFn(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
