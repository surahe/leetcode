

function bfs(graph, target) {
  var q = [target]
  var visited = new Set()
  var steps = 0

  while (q.length) {
    steps += 1
    for (var i = 0; i < q.length; i++) {
      var cur = q.shift()
      visited.add(cur)
      for (var neighbor in graph[cur]) {
        if (!visited.has(neighbor)) {
          q.push(neighbor)
        }
        if (neighbor == target) {
          return steps
        }
      }
    }
  }
  return -1
}