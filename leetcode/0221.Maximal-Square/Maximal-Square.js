/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || !matrix.length) return 0
  let m = matrix.length
  let n = matrix[0].length
  let dp = new Array(m).fill().map(() => new Array(n))
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = matrix[i][j]
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        ans = Math.max(dp[i][j], ans)
      } else {
        dp[i][j] = matrix[i][j]
      }
    }
  }
  return ans * ans
};