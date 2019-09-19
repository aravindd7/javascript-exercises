// Asked by Facebook

// For given set of positive unique integers arr = [1, 2]
// need to print out all possible subsets in any order
// Example [1, 2]:
// _
// 1
// 2
// 1,2

const printSubSets = (arr) => {
  const print = (result, i) => {
    if (i >= arr.length) {
      console.log('!', result);
    } else {
      print(result, i + 1);
      print(result + arr[i], i + 1);
    }
  }

  print('', 0);
}

let start = new Date().getTime();
let res = printSubSets([1, 2, 3]);
let end = new Date().getTime();
console.log(`Result: ${res}, execution time: ${end - start}`);