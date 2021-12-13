/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length
  let dp = new Array(n).fill(new Array(n))
  let lastRow = triangle[n - 1]
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = lastRow[i]
  }
  for (let i = n - 2; i >= 0; i--) {
    let row = triangle[i]
    for (let j = 0; j < i + 1; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + row[j]
    }
  }
  return dp[0][0]
};