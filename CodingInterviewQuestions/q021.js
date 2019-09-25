// Asked by Twitter

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return
// all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

const search1 = (arr, searchString) => {
  const regExp = new RegExp(`^${searchString}`, 'i');
  return arr.filter(a => regExp.test(a));
}

const prepare1 = (arr) => {
  let result = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    const a = arr[i];
    for (let j = 0; j <= a.length - 1; j++) {
      const key = a.slice(0, j + 1);
      const prevData = result[key] || [];
      result[key] = [...prevData, i];
    }
  }

  return result;
}

const search2 = (arr, searchString, preparedData) => {
  const indexes = preparedData[searchString];
  return indexes ? indexes.map(i => arr[i]) : [];
}

const alphabet = [
  'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n',
  'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'
];
const n = 300000;
const random = Math.floor(Math.random() * n);
const arr = [...Array(n)].map(() => {
  const length = Math.floor(Math.random() * 5);
  return [...Array(length + 1)].reduce(acc => acc + alphabet[Math.floor(Math.random() * alphabet.length)], '');
});

// console.log(arr);

let start = new Date().getTime();
let res = search1(arr, 'b');
let end = new Date().getTime();
console.log('Result1:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search1(arr, 'ba');
end = new Date().getTime();
console.log('Result1:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search1(arr, 'aaaa');
end = new Date().getTime();
console.log('Result1:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search1(arr, 'abaab');
end = new Date().getTime();
console.log('Result1:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
const preparedData = prepare1(arr);
end = new Date().getTime();
console.log(`Prepared data, execution time: ${end - start}`);

start = new Date().getTime();
res = search2(arr, 'b', preparedData);
end = new Date().getTime();
console.log('Result2:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search2(arr, 'ba', preparedData);
end = new Date().getTime();
console.log('Result2:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search2(arr, 'aaaa', preparedData);
end = new Date().getTime();
console.log('Result2:', res.length, `execution time: ${end - start}`);

start = new Date().getTime();
res = search2(arr, 'abaab', preparedData);
end = new Date().getTime();
console.log('Result2:', res.length, `execution time: ${end - start}`);