const arr = [10, 7, 3, 5, 1, 6];

function selectionSort(arr) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

console.log(selectionSort(arr));
