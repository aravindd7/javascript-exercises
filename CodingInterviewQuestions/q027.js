// Given a string, find the longest palidrome substring.
// Example: abcdeeefa - eee, kooks -> kook

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