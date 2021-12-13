/**
 * 矩阵理解参考
 * https://www.ruanyifeng.com/blog/2015/09/matrix-multiplication.html
 */

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  const m = grid.length,
    n = grid[0].length
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const borders = []
  const originalColor = grid[row][col]
  const direc = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const q = []
  q.push([row, col])
  visited[row][col] = true
  while (q.length) {
    const node = q.pop()
    const x = node[0],
      y = node[1]

    let isBorder = false
    for (let i = 0; i < 4; i++) {
      const nx = direc[i][0] + x,
        ny = direc[i][1] + y
      if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
        isBorder = true
      } else if (!visited[nx][ny]) {
        visited[nx][ny] = true
        q.push([nx, ny])
      }
    }
    if (isBorder) {
      borders.push([x, y])
    }
  }
  for (let i = 0; i < borders.length; i++) {
    const x = borders[i][0],
      y = borders[i][1]
    grid[x][y] = color
  }
  return grid
}
