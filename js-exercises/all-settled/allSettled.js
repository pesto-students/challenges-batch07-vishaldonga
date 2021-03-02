const allSettled = (promises) => {
  const promised = [];
  let promiseCounter = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach((element) => {
        Promise.resolve(element).then((res) => {
          promised.push({ status: 'fulfilled', value: res });
          promiseCounter += 1;
          if (promiseCounter === promises.length) {
            resolve(promised);
          }
        })
          .catch((error) => {
            promised.push({ status: 'rejected', reason: error });
            promiseCounter += 1;
            if (promiseCounter === promises.length) {
              resolve(promised);
            }
            reject(error);
          });
      });
    } catch (err) {
      reject(new Error(err));
    }
  });
};

export { allSettled };
