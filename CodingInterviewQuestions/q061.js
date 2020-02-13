// Asked by LinkedIn

// Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
// For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2,
// return [(0, 0), (3, 1)].

const find = (points, mainPoint, k) => {
  let distancesCount = 0;
  let distances = {};
  for (let index in points) {
    const point = points[index];
    const distance = (mainPoint.x - point.x) ** 2 + (mainPoint.y - point.y) ** 2;

    // adding point to distances
    if (!distances[distance]) {
      distances[distance] = [index];
      distancesCount++;
    } else {
      distances[distance] = [...distances[distance], index];
      distancesCount++;
    }

    // removing farthest point from distance when count > k
    if (distancesCount > k) {
      const distancesKeys = Object.keys(distances);
      const biggestDistance = distancesKeys[distancesKeys.length - 1];
      if (distances[biggestDistance].length > 1) {
        distances[biggestDistance].splice(distances[biggestDistance].length - 1, 1);
      } else {
        delete (distances[biggestDistance]);
      }
      distancesCount--;
    }
  }

  return Object.values(distances).map(index => points[index]);
}

console.log([{ x: 1, y: 1 }, { x: 1, y: 2 }], find([
  { x: 2, y: 4 },
  { x: 1, y: 2 },
  { x: 1, y: 9 },
  { x: 1, y: 1 },
  { x: 0, y: 9 },
  { x: 7, y: 1 },
  { x: 5, y: 0 }
], { x: 0, y: 0 }, 2));

console.log([{ x: 1, y: 2 }], find([
  { x: 2, y: 4 },
  { x: 1, y: 2 },
  { x: 1, y: 9 },
  { x: 0, y: 9 },
  { x: 7, y: 1 },
  { x: 5, y: 0 }
], { x: 0, y: 0 }, 1));

console.log([{ x: 1, y: 2 }, { x: 2, y: 4 }, { x: 1, y: 9 }], find([
  { x: 2, y: 4 },
  { x: 1, y: 2 },
  { x: 1, y: 9 },
], { x: 0, y: 0 }, 10));