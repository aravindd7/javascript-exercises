// Asked by Facebook

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced
// (well-formed).
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.

const createStack = () => {
  let items = [];
  const push = (item) => {
    items.push(item);
  };
  const pop = () => {
    const item = items.splice(items.length - 1, 1);
    return item[0];
  };
  return { items, push, pop };
}

const checkFormed = (brackets) => {
  const stack = createStack();

  for (bracket of brackets) {
    if ('([{'.includes(bracket)) {
      stack.push(bracket === '(' ? ')' : bracket === '[' ? ']' : '}');
    } else {
      if (stack.pop() !== bracket) {
        return false;
      }
    }
  }
  return stack.items.length === 0;
}

console.log(true, checkFormed(''));

console.log(true, checkFormed('([][][][][][][][[{}[]{}[{{[()({})]}}]]][])[]({})'));

console.log(false, checkFormed('([{[}]])'));

console.log(false, checkFormed('([{'));