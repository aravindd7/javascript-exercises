// Asked by Square

// Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but
// also not 0-100 or 100-0). You do not know the bias of the coin.
// Write a function to simulate an unbiased coin toss.

const toss_biased1 = () => {
  return Math.random() > 0.5 ? 1 : 0;
}

console.log(1, [...Array(1000)].reduce(acc => acc + toss_biased1(), 0));

const bias = (Math.random() - 0.5) / 3;
const toss_biased2 = () => {
  return Math.random() + bias > 0.5 ? 1 : 0;
}

console.log(2, [...Array(1000)].reduce(acc => acc + toss_biased2(), 0));