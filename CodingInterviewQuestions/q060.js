// Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words
// in a string.
// For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world",
// return 1 because there's only one word "cat" in between the two words.

const findDistance = (word1, word2, str) => {
  const strArray = str.split(' ');
  let minDistance = null;
  let distance = null;
  for (word of strArray) {
    if (word === word1) {
      distance = 0;
    } else if (word === word2) {
      if (minDistance === null || minDistance > distance) {
        minDistance = distance;
      }
    } else if (distance !== null) {
      distance++;
    }
  }

  return minDistance;
}

console.log(4, findDistance('hello', 'world', 'dog cat hello cat dog dog cat world'));
console.log(1, findDistance('hello', 'world', 'dog cat hello cat dog dog hello cat world'));
console.log(1, findDistance('hello', 'world', 'world dog cat hello cat dog dog hello cat world'));
console.log(null, findDistance('hello', 'world', 'world dog cat hello cat dog dog hello cat'));