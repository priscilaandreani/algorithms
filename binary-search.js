function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      return (high = mid - 1);
    } else {
      high = mid + 1;
    }
  }
  return null;
}

const mylist = [1, 3, 5, 7, 9];
console.log(binarySearch(mylist, 3));
console.log('hello world');
