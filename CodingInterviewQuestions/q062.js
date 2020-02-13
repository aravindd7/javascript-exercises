// Asked by Triplebyte

// You are given n numbers as well as n probabilities that sum up to 1. Write a function to generate one of the numbers
// with its corresponding probability.
// For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2, 0.2], your function should return 1
// 10% of the time, 2 50% of the time, and 3 and 4 20% of the time.
// You can generate random numbers between 0 and 1 uniformly.

const generate = (numbers, probabilities) => {
  const random = Math.random();
  let sum = 0;
  for (pIndex in probabilities) {
    sum += probabilities[pIndex];
    if (sum >= random) {
      return numbers[pIndex];
    }
  }
}

let results = {};

for (let j = 0; j < 10000000; j++) {
  const random = generate([1, 2, 3, 4, 5], [0.2, 0.5, 0.2, 0.05, 0.05]);
  results[random] = results[random] > 0 ? results[random] + 1 : 1;
}

console.log(results);

results = {};

for (let j = 0; j < 10000000; j++) {
  const random = generate([1, 2, 3, 4, 5], [0, 0, 0, 0.05, 0.95]);
  results[random] = results[random] > 0 ? results[random] + 1 : 1;
}

console.log(results);