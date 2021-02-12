/* eslint-disable prefer-arrow-callback */
const sumEvenArgs = (...args) => {
  if (!args) return 0;
  const evenArgs = args.filter(
    function checkForEven(num) {
      return (num % 2 === 0);
    },
  );
  const result = evenArgs.reduce(
    function callBack(totalSum, number) {
      return (totalSum + number);
    }, 0,
  );
  return result;
};

export { sumEvenArgs };
