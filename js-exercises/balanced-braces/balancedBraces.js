function balancedBraces(...args) {
  if (!args.length) return true;
  const str = args[0] || '';
  const stack = [];
  const startBracketArray = ['(', '[', '{'];
  const endBracketArray = [')', ']', '}'];

  for (const char of str) {
    if (startBracketArray.includes(char)) {
      stack.push(char);
    } else if (endBracketArray.includes(char)) {
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
