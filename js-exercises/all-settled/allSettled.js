const allSettled = (promises) => {
  const promised = [];
  let promiseCounter = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach(element => {
        Promise.resolve(element).then((res) => {
          promised.push(res);
          promiseCounter += 1;
          if (promiseCounter === promises.length) {
            resolve(promised);
          }
        })
          .catch((error) => {
            promised.push(error);
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
