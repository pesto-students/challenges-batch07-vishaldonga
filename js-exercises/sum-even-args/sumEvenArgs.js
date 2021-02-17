const sumEvenArgs = (...args) => {
  if (!args) return 0;
  const evenArgs = args.filter((num) => (num % 2 === 0));
  return evenArgs.reduce((totalSum, number) => (totalSum + number), 0);
};

export { sumEvenArgs };
