function balancedBraces(...args) {
  if (!args.length) return true;
  const str = args[0] || '';
  const stack = [];
  const startBracketArray = ['(', '[', '{'];
  const endBracketArray = [')', ']', '}'];

  for (const char of str) {
    if (startBracketArray.indexOf(char) > -1) {
      stack.push(char);
    } else if (endBracketArray.indexOf(char) > -1) {
      const poppedElement = stack.pop();
      if (!(endBracketArray.indexOf(char) === startBracketArray.indexOf(poppedElement))) {
        return false;
      }
    }
  }
  if (!stack.length) return true;
  return false;
}

export {
  balancedBraces,
};
