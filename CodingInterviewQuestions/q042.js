// Asked by Two Sigma

// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a
// function rand5() that returns an integer from 1 to 5 (inclusive).

const rand7 = () => {
  return Math.floor(Math.random() * 7) + 1;
}

const rand5 = () => {
  let random = rand7();
  while (random > 5) {
    random = rand7();
  }
  return random;
}

let results = {};

for (let j = 0; j < 10000000; j++) {
  const random = rand5();
  results[random] = results[random] > 0 ? results[random] + 1 : 1;
}

console.log(results);