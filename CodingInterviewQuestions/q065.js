// Asked by Smarp

// Cut the Bamboo
// Given an array with the lengths pieces of bamboo, repeatedly perform the following:
// - Count the number of pieces of bamboo.
// - Find the shortest length piece(s).
// - Discard any piece of that length.
// - Cut that shortest length from each of the longer pieces.  Each piece just cut is an offcut.
// - Discard all offcuts.
// - Repeat until there are no more pieces.

// Maintain an array of the numbers of pieces at the beginning of each round of actions.
// For example, there are n = 4 pieces, with lengths = [1, 1, 3, 4]. The shortest pieces are 1 unit long, so discard
// them and remember their length. Remove their length, 1 unit, from the longer pieces and discard the offcuts. Now
// there are 2 pieces of bamboo, lengths = [2, 3].  Discard the piece of length 2, cut 2 from the piece length 3 and
// discard the offcut. Now there is only one piece of length 1.  Discard it and return an array with the number of
// pieces at the start of each turn: [4, 2, 1].

// lengths     cut length      pieces
// 1 1 3 4          1            4
// _ _ 2 3          2            2
// _ _ _ 1          1            1
// _ _ _ _        DONE        DONE

const cutBamboo = (lengths) => {
  console.log(1, lengths);
  const min = lengths.reduce((min, cur) => min ? Math.min(min, cur) : cur, null);
  console.log(2, min);
  let newLengths = [];
  let pieces = lengths.length;
  for (let l of lengths) {
    const newL = l - min;
    if (newL > 0) {
      newLengths.push(newL);
    }
  }
  console.log(3, newLengths);


  return [
    pieces,
    ...(newLengths.length === 0 ? [] : cutBamboo(newLengths)),
  ];
}

console.log([4, 2, 1], cutBamboo([1, 1, 3, 4]));
console.log([7, 5, 3, 2, 1], cutBamboo([6, 5, 4, 4, 2, 2, 8]));