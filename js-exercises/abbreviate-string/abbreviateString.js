function abbreviateString(str) {
  //  Checking for invalid inputs
  if (typeof str !== 'string') {
    throw new Error('Invalid Parameters');
  }
  const arrayWords = str.split(' ');
  const arraySize = arrayWords.length;
  //  If given input string is single word then it will return
  //  word itself else it will return abbreviated string
  if (arraySize === 1) {
    return arrayWords[0];
  }
  return `${arrayWords[0]} ${arrayWords[arraySize - 1][0].toUpperCase()}.`;
}

export { abbreviateString };
