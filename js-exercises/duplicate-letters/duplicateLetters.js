function duplicateLetters(...args) {
  try {
    if (args) {
      // Converting given string to sorted array
      const mainArray = [...args][0].split('').sort();
      let count = 1;
      let maxCount = 1;
      const tempArray = [];
      // Checking every character and its count
      for (const char of mainArray) {
        if (tempArray.indexOf(char) < 0) {
          tempArray.push(char);
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

//Optimised Solution
// function duplicateLetters(str) {
//   if (typeof str !== "string") {
//     throw new Error("Invalid type");
//   }
//   const arrTemp = [];
//   let maxCount = 1;
//   for (const char of str) {
//     if (arrTemp.indexOf(char) > -1) {
//       arrTemp[char] += 1;
//     } else {
//       arrTemp.push(char);
//       arrTemp[char] = 1;
//     }
//     if (arrTemp[char] > maxCount) {
//       maxCount = arrTemp[char];
//     }
//   }
//   if (maxCount === 1) {
//     return false;
//   }
//   return maxCount;
// }
/////////////

export {
  duplicateLetters,
};
