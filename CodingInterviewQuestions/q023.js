// Asked by Google

// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
// Hint: The basic equation of a circle is x2 + y2 = r2.

const montePi = (n) => {
  let countInside = 0;
  for (let i = 0; i < n; i++) {
    const x = Math.random();
    const y = Math.random();
    if (Math.sqrt(x * x + y * y) <= 1) {
      countInside++;
    }
    if (i % 10000000 === 0) {
      console.log('n =', i, ', pi =', Math.floor(countInside * 4000 / i) / 1000);
    }
  }
  const ratio = Math.floor(countInside * 4000 / n) / 1000;
  return ratio;
}

let start = new Date().getTime();
let res = montePi(100000000);
let end = new Date().getTime();
console.log('Result:', res, `execution time: ${end - start}`);