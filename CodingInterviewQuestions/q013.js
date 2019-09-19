// Asked by Facebook

// Дано массив arr и алфавит alphabet, надо написать функцию которая отвечает
// на вопрос отсортирован ли массив соответствунно заданному алфавиту. 
// Пример:
// arr = ['ccc', 'ccb', 'cbb', 'cbbb']
// alphabet = ['c', 'b', 'a']
// Ответ должен быть: true.

const compare = (a, b, alphabet) => {
  if (a === b) {
    return 0;
  }
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (alphabet.indexOf(a[i]) < alphabet.indexOf(b[i])) {
      return -1;
    }
    if (alphabet.indexOf(a[i]) > alphabet.indexOf(b[i])) {
      return 1;
    }
  }

  return 1;
}

// console.log(compare('cca', 'cba', ['a', 'b', 'c']));
// console.log(compare('cc', 'ccc', ['a', 'b', 'c']));

// O(n)
const isSorted = (arr, alphabet) => {
  // console.log(arr, alphabet);
  for (let i = 0; i < arr.length - 2; i++) {
    if (compare(arr[i], arr[i + 1], alphabet) === 1) {
      return false;
    }
  }
  return true;
}

const alphabet = [
  'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n',
  'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'
];
const n = 10000;
const random = Math.floor(Math.random() * n);
const arr = [...Array(n)].map(e => {
  const length = Math.floor(Math.random() * 50);
  return [...Array(length + 1)].reduce(acc => acc + alphabet[Math.floor(Math.random() * alphabet.length)], '');
});

// console.log(arr);

let start = new Date().getTime();
let res = isSorted(arr, alphabet);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);

// console.log(arr.sort((a, b) => compare(a, b, alphabet)));

start = new Date().getTime();
res = isSorted(arr.sort((a, b) => compare(a, b, alphabet)), alphabet);
end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);