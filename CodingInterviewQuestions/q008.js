// Asked by Google

// Given an array of integers, [1, 2, 5] consider it as a number 125, and return  incremented number in same array
// format - [1, 2, 6] 
// Example: [9, 9] -> [1, 0 , 0]

const incrementArray1 = (arr) => (+arr.join('') + 1).toString().split('').map(a => +a);

const incrementArray2 = (arr) => {
  let result = [];
  let i = arr.length - 1;
  let addition = 0;
  while (i >= 0) {
    let newValue = i === arr.length - 1 ? arr[i] + 1 : arr[i] + addition;
    addition = 0;
    if (newValue === 10) {
      addition = 1;
      newValue = 0;
    }
    result.unshift(newValue);
    if (i === 0 && addition === 1) {
      result.unshift(1);
    }
    i--;
  }

  return result;
}

let start = new Date().getTime();
let res = incrementArray1([1, 2, 3]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = incrementArray1([9, 9, 9, 9, 9]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = incrementArray2([1, 2, 9]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = incrementArray2([9, 9, 9]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = incrementArray2([1, 1, 0]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = incrementArray2([6, 7, 8]);
end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);