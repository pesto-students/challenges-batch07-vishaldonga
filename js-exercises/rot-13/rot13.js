function rot13(str) {
  if (!str || typeof str !== 'string') return false;
  const arrChar = [];
  for (const char of str) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      if (char.charCodeAt(0) <= 77) {
        arrChar.push(String.fromCharCode(char.charCodeAt(0) + 13));
      } else {
        arrChar.push(String.fromCharCode(char.charCodeAt(0) - 13));
      }
    } else {
      arrChar.push(char);
    }
  }
  return arrChar.join('');
}

export {
  rot13,
};
