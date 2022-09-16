// Reverse string

const reverseStr = (str) => {
  let myStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    myStr += str[i];
  }

  return myStr;
};

const r = reverseStr("hello world");
console.log(r);

// 1 = 1 = n
// 2 = 1+2 = 1+n
// 3 = 1+2+3 = 3+n
// 4 = 1+2+3+4 = 6 +n
// 5 = 1+2+3+4+5 = 10+n
// 5 = n + n - 1 + n - 2 + n - 3 + n - 4
//   = 5n - 10 = 10n = 5n -10 -10n = 0 = 
//   = 5(n-2)



// n*(n+1)/2