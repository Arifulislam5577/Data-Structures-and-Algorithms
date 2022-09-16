function sentenceCapitalize(str) {
  return str
    .split(" ")
    .map(function (value) {
      return value[0].toUpperCase().concat(value.slice(1).toLowerCase());
    })
    .join(" ");
}

console.log(sentenceCapitalize("my naMe is arif"));
console.log(sentenceCapitalize("arif"));
