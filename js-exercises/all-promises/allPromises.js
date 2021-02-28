const allPromises = (promises) => {
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
          .catch((error) => reject(error));
      });
    } catch (err) {
      reject(new Error(err));
    }
  });
};

export { allPromises };
