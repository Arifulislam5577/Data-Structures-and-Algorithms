function numReverse(num) {
  const resversed = num.toString().split("").reverse().join("");
  return parseInt(resversed) * Math.sign(num);
}

console.log(numReverse(90));
console.log(numReverse(-30));
console.log(numReverse(112));
console.log(numReverse(123));
