/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) return 0
  if (obstacleGrid[0][0] === 1) return 0

  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // let dp = new Array(m).fill(new Array(n)) // 不可用
  // fill()每次都是创建一个对象，指的是同一内存地址的对象，简单来说就是浅拷贝，所以会同时变更数据。
  let dp = new Array(m).fill([]).map(() => {
    return new Array(n)
  })
  dp[0][0] = 1
  for (let i = 1; i < m; i++) {
    dp[i][0] = numVal(obstacleGrid[i][0], dp[i - 1][0])
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = numVal(obstacleGrid[0][i], dp[0][i - 1])
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = numVal(obstacleGrid[i][j], (dp[i - 1][j] + dp[i][j - 1]))
    }
  }
  return dp[m - 1][n - 1]
};

const numVal = (val, newVal) => {
  if (val == 1) return 0
  return newVal
}