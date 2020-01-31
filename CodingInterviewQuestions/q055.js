// Asked by Google

// Given two strings A and B, return whether or not A can be shifted some number of times to get B.
// For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

const check = (A, B) => {
  for (let i = 0; i < A.length; i++) {
    if (A[0] === B[i] && A === B.substring(i, B.length) + B.substring(0, i)) {
      return true;
    }
  }

  return false;
};

console.log(true, check('12345', '45123'));
console.log(false, check('12345', '345123'));
console.log(true, check('123345', '345123'));
console.log(true, check('JHGFKLJHKUYHGUIGYUG', 'JHGFKLJHKUYHGUIGYUG'));
console.log(true, check('JHGFKLJHKUYHGUIGYUG', 'YHGUIGYUGJHGFKLJHKU'));