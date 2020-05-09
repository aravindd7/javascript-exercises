// Asked by Palantir

// Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888.
// 678 is not a palindrome. Do not convert the integer into a string.

const check = (n) => {
  let reverse = 0;
  let nn = n;
  while (nn > 0) {
    reverse = reverse * 10 + nn % 10;
    nn = ~~(nn / 10);
  }

  return reverse === n;
}

console.log(true, check(0));
console.log(true, check(1));
console.log(true, check(121));
console.log(true, check(888));
console.log(true, check(12321));
console.log(true, check(12345654321));
console.log(false, check(123));
