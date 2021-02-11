function duplicateLetters(...args) {
  try {
    if (args) {
      //  Converting given string to sorted array
      const mainArray = [...args][0].split('').sort();
      let count = 1;
      let maxCount = 1;
      const tempArray = [];
      //  Checking every character and its count
      for (let i = 0; i < mainArray.length; i += 1) {
        if (tempArray.indexOf(mainArray[i]) < 0) {
          tempArray.push(mainArray[i]);
          count = 1;
        } else {
          count += 1;
          if (maxCount < count) {
            maxCount = count;
          }
        }
      }
      if (maxCount === 1) {
        return false;
      }
      return maxCount;
    }
    throw new Error('No arguments passed');
  } catch (e) {
    throw e.message;
  }
}

export {
  duplicateLetters,
};
