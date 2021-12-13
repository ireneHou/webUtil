/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length + 1)
  dp[0] = nums[0]
  let ans = nums[0]
  for (let i = 1, n = nums.length; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]
    ans = Math.max(ans, dp[i])
  }
  return ans
};