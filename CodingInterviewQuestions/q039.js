// Given a non-negative index k where k<=33, return the k-th index row of the Pascal's triangle.
// Note that the rows index starts from 0.

const getRow = (k) => {
  let res = [];

  for (let i = 0; i <= k; i++) {
    console.log(res);
    if (i === 0) {
      res = [1];
      continue;
    }
    if (i === 1) {
      res = [1, 1];
      continue;
    }
    const newRes = [];
    for (let j = 0; j <= res.length / 2; j++) {
      const newValue = j === 0 ? 1 : res[j - 1] + res[j];
      newRes[j] = newValue;
      newRes[res.length - j] = newValue;
    }
    res = newRes;
  }

  return res;
}

console.log(getRow(7));