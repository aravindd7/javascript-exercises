// Asked by Google

// Given a string, split it into as few strings as possible such that each string is a palindrome.
// For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].
// Given the input string abc, return ["a", "b", "c"].

const measureLongestPolindrome = (str, i, isDoubleMiddle, polindromeStart, polindromeLength) => {
  let offset = 0;
  const addRight = isDoubleMiddle ? 2 : 1;
  while (
    str[i - offset - 1] && str[i - offset - 1].length === 1 &&
    str[i + offset + addRight] && str[i + offset + addRight].length === 1 &&
    str[i - offset - 1] === str[i + offset + addRight]
  ) {
    offset++;
  }
  const newPolindromeLength = offset * 2 + addRight;
  if (polindromeLength < newPolindromeLength) {
    polindromeStart = i - offset;
    polindromeLength = newPolindromeLength;
  }
  return [polindromeStart, polindromeLength];
}

const split = (str) => {
  str = str.split('');
  while (1) {
    // each iteration we take longest polyndrome chars and turn to string (ex. ['o', 'a', 'o', 'm'] => ['oao', 'm'])
    let polindromeStart = 0;
    let polindromeLength = 0;
    // searching for longest unprocessed polyndrome
    for (let i = 0; i < str.length; i++) {
      [polindromeStart, polindromeLength] = measureLongestPolindrome(str, i, false, polindromeStart, polindromeLength);
      if (str[i] === str[i + 1]) {
        [polindromeStart, polindromeLength] = measureLongestPolindrome(str, i, true, polindromeStart, polindromeLength);
      }
    }
    if (polindromeLength === 1) {
      // when we have no more unprocessed polyndroms - exit
      return str;
    } else {
      // turning longest polyndrome to string
      const polindrome = str.splice(polindromeStart, polindromeLength).join('');
      str.splice(polindromeStart, 0, polindrome);
    }
  }
}

console.log(['a', 'bob'], split('abob'));
console.log(['k', 't', 'lol', 'a', 'bob'], split('ktlolabob'));
console.log(['k', 't', 'lolabobalol', 'n'], split('ktlolabobaloln'));
console.log(['k', 't', 'lool', 'a', 'bob'], split('ktloolabob'));
console.log(['oooo'], split('oooo'));
console.log(['ooooo'], split('ooooo'));
console.log(['o'], split('o'));