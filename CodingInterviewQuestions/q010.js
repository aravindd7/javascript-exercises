// Asked by Google

// Given a string input 'ABIJYAB'm return first recurrent letter - A.

// O(n)
const find = (str) => {
  let cache = {};
  for (let i = 0; i < str.length; i++) {
    if (cache[str[i]]) {
      return str[i];
    }
    cache[str[i]] = true;
  }
}

let start = new Date().getTime();
let res = find('AKJHGUFJYGHVFUBIJYAB');
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);