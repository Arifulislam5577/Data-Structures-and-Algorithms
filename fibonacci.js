function fibonacci(num) {
  const arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(fibonacci(7));

//BIG(O) --> O(n)
