function polindrom(str) {
  return str.split("").every(function (value, index) {
    return value === str[str.length - 1 - index];
  });
}

console.log(polindrom("madam"));
console.log(polindrom("racecar"));
console.log(polindrom("hello"));
