// Asked by Google

// You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string. Determine
// whether the parentheses are balanced.
// For example, (()* and (*) are balanced. )*( is not balanced.

class Stack {
  constructor() {
    this.values = [];
  }

  push(value) {
    this.values.push(value);
  }

  pop() {
    const value = this.values[this.values.length - 1];
    this.values.splice(this.values.length - 1);
    return value;
  }

  peek() {
    return this.values.length > 0 ? this.values[this.values.length - 1] : undefined;
  }

  copy() {
    const s = new Stack();
    for (const v of this.values) {
      s.push(v);
    }
    return s;
  }
}

// const s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// const s2 = s.copy();
// console.log(1, s2, s);
// s2.pop();
// console.log(2, s2, s);

const check = (str, stack = new Stack()) => {
  // console.log(0, str, stack);

  for (let i = 0; i < str.length; i++) {
    // console.log(1, str[i]);
    if (str[i] === '(') {
      stack.push('(');
    } else if (str[i] === '*') {
      stackForR1 = stack.copy();
      stackForR1.push('(');
      const r1 = check(str.substr(i + 1, str.length), stackForR1);

      const r2 = check(str.substr(i + 1, str.length), stack.copy());

      let r3 = false;
      if (stack.peek()) {
        stackForR3 = stack.copy();
        stackForR3.pop();
        r3 = check(str.substr(i + 1, str.length), stackForR3);
      }

      return r1 || r2 || r3;
    } else if (str[i] === ')') {
      if (stack.peek()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.peek() === undefined;
};

console.log(true, check('(*'));
console.log(true, check('*'));
console.log(true, check('()'));
console.log(true, check('(())'));
console.log(true, check('(()())'));
console.log(true, check('((()()))'));
console.log(false, check(')'));
console.log(false, check(')('));
console.log(true, check('*)(*'));
console.log(true, check('(*)'));
console.log(true, check('**(*)()))'));
console.log(true, check('**(*)()'));
console.log(true, check('(()*'));