// Asked by Jane Street

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Given this implementation of cons:
// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

const cons = (a, b) => {
  const pair = (f) => f(a, b);
  return pair;
};

const car = (f) => {
  let first;
  f((x, y) => first = x);

  return first;
}

const cdr = (f) => {
  let second;
  f((x, y) => second = y);

  return second;
}

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));