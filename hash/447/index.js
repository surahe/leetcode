/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const hash = Array(points.length).fill(0).map(() => ({}));
  let count = 0

  points.forEach((a, i) => {
    const map = hash[i]

    points.forEach((b, j) => {
      if (a !== b) {
        const dist = calDitance(a, b)
        map[dist] = (map[dist] || 0) + 1
      }
    })


    for (const dist in map) {
      const num = map[dist]
      if (num > 1) count += num * (num - 1)
    }
  })

  return count;

  function calDitance([x1, y1], [x2, y2]) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  }
};