const deepCopyObject = objToCopy => {
  if (objToCopy === null || typeof objToCopy !== 'object') return objToCopy;
  const deepCloneObject = Array.isArray(objToCopy) ? [] : {};
  for (const key in objToCopy) {
    if (key) {
      const value = objToCopy[key];
      deepCloneObject[key] = deepCopyObject(value);
    }
  }
  return deepCloneObject;
};

export { deepCopyObject };
