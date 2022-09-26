function recurionFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * recurionFactorial(num - 1);
}

console.log(recurionFactorial(5));

//BIG(O) --> O(n)
