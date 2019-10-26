// Asked by Microsoft

// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list.
// If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then
// return null.
// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should 
// return ['the', 'quick', 'brown', 'fox'].
// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either
// ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].


const reconstruct = (dictionary, str, prevResult = []) => {
  for (d of dictionary) {
    if (str.startsWith(d)) {
      const newStr = str.replace(d, '');
      if (newStr.length === 0) {
        return [...prevResult, d];
      } else {
        const res = reconstruct(dictionary, newStr, [...prevResult, d]);
        if (res.length) {
          return res;
        }
      }
    }
  }
  return [];
}

console.log(reconstruct(['t', 'quick', 'lazy', 'brown', 'jumps', 'the', 'over', 'fox'], 'thequickbrownfoxjumpsover'));
console.log(reconstruct(['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond'));