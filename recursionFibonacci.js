function recurionFibonacci(num) {
  if (num < 2) {
    return num;
  }
  return recurionFibonacci(num - 1) + recurionFibonacci(num - 2);
}

console.log(recurionFibonacci(6));

// BIG(O) --> O(2^n)
