function findKey(box, key) {
  for (let item in box) {
    if (box[item] === key) {
      return item;
    }
    if (typeof box[item] === 'object' && box[item] !== null) {
      let foundKey = findKey(box[item], key);
      if (foundKey) {
        return foundKey;
      }
    }
  }
  return null;
}

// factorial (callstackn)
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
