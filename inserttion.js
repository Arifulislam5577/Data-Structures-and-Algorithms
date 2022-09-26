// const arr = [9, 1, 3, 7, 2, 4, 6, 5, 8];

// function insertion(arr) {
//   let item, j;
//   for (let i = 1; i < arr.length; i++) {
//     item = arr[i];
//     j = i - 1;
//     while (j >= 0 && arr[j] > item) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = item;
//   }

//   return arr;
// }

// console.log(insertion(arr));

const arr = [2, 4, 1, 3];

const insertion = (arr) => {
  let item, j;
  for (let i = 1; i < arr.length; i++) {
    item = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] < item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = item;
  }

  return arr;
};

console.log(insertion(arr));
