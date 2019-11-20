// Asked by Facebook

// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform
// probability.

const pickRandom = (stream) => {
  let randomN = undefined;
  for (const [i, n] of stream.entries()) {
    // probability of picking any element is 1/n, where n = count of elements that we already processed in a stream
    if (i === 0) {
      randomN = n;
    }
    if (Math.round(Math.random() * (i + 1)) === i) {
      randomN = n;
    }
  }
  return randomN;
}

let results = {};

for (let j = 0; j < 10000000; j++) {
  const random = pickRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  results[random] = results[random] > 0 ? results[random] + 1 : 1;
}

console.log(results);