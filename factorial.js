function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));

//Big(O) --> O(n)
