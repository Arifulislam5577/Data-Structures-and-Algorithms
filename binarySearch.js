const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function hasThisNum(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (num === arr[middle]) {
      return true;
    } else if (num > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
}

console.log(hasThisNum(arr, 100));
