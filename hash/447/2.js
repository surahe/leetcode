/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  if (points == null || points.length <= 2)
  return 0;

  var res = 0
  var equalCount = new Map()

  for (var i = 0; i < points.length; i ++) {
    for (var j = 0; j < points.length; j++) {
      var distance = calDitance(points[i], points[j])
      var val = equalCount.get(distance)
      equalCount.set(distance, (val || 0) + 1)
    }

    equalCount.forEach(count => {
      res += count * (count - 1)
    })
    equalCount.clear();
  }

  return res;

  function calDitance([x1, y1], [x2, y2]) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  }
}