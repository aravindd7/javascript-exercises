// Asked by IBM

// Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If
// this is not possible, return None.
// For example, given "aaabbc", you could return "ababac". Given "aaab", return None.

const rearrange = (arr) => {
  let dictionary = {};
  for (a of arr) {
    dictionary[a] = (dictionary[a] || 0) + 1;
  }
  dictionary = Object.entries(dictionary);
  dictionary = dictionary.sort((a, b) => a[1] < b[1] ? -1 : 1);
  if (dictionary[dictionary.length - 1][1] >= (arr.length/2 +1)) {
    return 'None';
  }
  let result = [];
  for (item of dictionary) {
    let [char, count] = item;
    let modifyer = 0;
    while (count > 0) {
      const index = (modifyer * 2);
      result.splice(index, 0, char);
      modifyer++;
      count--;
    }
  }

  return result.join('');
}

console.log('basdaaascwd', rearrange('basdaaascwd'));
console.log('aaaab', rearrange('aaaab'));
console.log('aaab', rearrange('aaab'));
console.log('aab', rearrange('aab'));
console.log('abasdaascwaadaa', rearrange('abasdaascwaadaa'));
