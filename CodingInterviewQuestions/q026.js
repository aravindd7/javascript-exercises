// Asked by Amazon

// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated
// successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded
// as "4A3B2C1D2A".
// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists
// solely of alphabetic characters. You can assume the string to be decoded is valid.

const encode = (str) => {
  let result = '';
  let counter = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === 0) {
      counter++;
      continue;
    } else if (str[i] === str[i - 1]) {
      counter++;
      continue;
    }
    result += counter + str[i - 1];
    counter = 1;
  }
  return result;
}

const decode = (str) => {
  let result = '';
  let number = '';
  for (let i = 0; i < str.length; i++) {
    if ('01234567890'.includes(str[i])) {
      number += str[i];
    } else {
      result += [...Array(+number)].map(() => str[i]).join('');
      number = 0;
    }
  }
  return result;
}

const initialString = 'BPAAAAAAAAAAAAAAAABGGGVVVKKQ';
const encodedString = encode(initialString);
console.log(initialString, encodedString);
const decodedString = decode(encodedString);
console.log(initialString, decodedString);