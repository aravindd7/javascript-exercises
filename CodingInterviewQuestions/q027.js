// Asked by Amazon

// Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum
// length, return any one.
// For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of
// "bananas" is "anana".

const findLongestPalidrome = (str) => {
  let longestPalindrome = '';
  for (i = 0; i < str.length; i++) {
    let offset = 0;
    while (str[i - offset - 1] === str[i + offset + 1]) {
      offset++;
    }
    let palidrome = str.substring(i - offset, i + offset + 1);
    if (palidrome.length > longestPalindrome.length) {
      longestPalindrome = palidrome;
    }

    if (str[i] === str[i + 1]) {
      let offset = 0;
      while (str[i - offset - 1] === str[i + offset + 2]) {
        offset++;
      }
      palidrome = str.substring(i - offset, i + offset + 2);
      if (palidrome.length > longestPalindrome.length) {
        longestPalindrome = palidrome;
      }
    }
  }
  return longestPalindrome;
}

console.log(findLongestPalidrome('ktkabak'));
console.log(findLongestPalidrome('ktkabbak'));
console.log(findLongestPalidrome('google'));