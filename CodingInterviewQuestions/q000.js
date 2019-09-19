// For given n write fibonacci sequence

// Just recursion
const fibo1 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibo1(n - 1) + fibo1(n - 2);
}

let start = new Date().getTime();
let res = fibo1(40);
let end = new Date().getTime();
console.log(`fibo1: ${res}, execution time: ${end - start}`);

// Recursion and caching (memoization)
const cache = {};
const fibo2 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  }
  const res = fibo2(n - 1) + fibo2(n - 2);
  cache[n] = res;
  return res;
}

start = new Date().getTime();
res = fibo2(40);
end = new Date().getTime();
console.log(`fibo2 40: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = fibo2(1000);
end = new Date().getTime();
console.log(`fibo2 1000: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = fibo2(10000);
end = new Date().getTime();
console.log(`fibo2 10000: ${res}, execution time: ${end - start}`);

// Iteration
const fibo3 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  const bottomUp = [0, 1, 1];
  for (let i = 3; i < n + 1; i++) {
    bottomUp[i] = bottomUp[i - 2] + bottomUp[i - 1];
  }
  return bottomUp[n];
}

start = new Date().getTime();
res = fibo3(40);
end = new Date().getTime();
console.log(`fibo3 40: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = fibo3(1000);
end = new Date().getTime();
console.log(`fibo3 1000: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = fibo3(10000);
end = new Date().getTime();
console.log(`fibo3 10000: ${res}, execution time: ${end - start}`);

start = new Date().getTime();
res = fibo3(100000);
end = new Date().getTime();
console.log(`fibo3 100000: ${res}, execution time: ${end - start}`);