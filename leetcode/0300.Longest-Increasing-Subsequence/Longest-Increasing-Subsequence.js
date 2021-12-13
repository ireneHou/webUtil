/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || !nums.length) return 0
  let ans = 0
  const len = nums.length
  let dp = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans
};