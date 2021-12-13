<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // 排序，把可能有的负数排到前面
  nums.sort((a, b) => a - b)
  let result = 0
  let minNum = 100
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // 贪心：如果是负数，而k还有盈余，就把负数反过来
    if (k > 0 && nums[i] < 0) {
      nums[i] = 0 - nums[i]
      k--
    }
    // 记录最小值
    if (minNum > nums[i]) {
      minNum = nums[i]
    }
    result += nums[i]
  }
  // 如果k没剩，那说明能转的负数都转正了，已经是最大和，返回sum
  // 如果k有剩，说明负数已经全部转正，所以如果k还剩偶数个就自己抵消掉，不用删减，如果k还剩奇数个就减掉2倍最小正数。
  if (k > 0 && k % 2 > 0) {
    result += 0 - minNum * 2
  }
  return result
}
=======
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // 排序，把可能有的负数排到前面
  nums.sort((a, b) => a - b)
  let result = 0
  let minNum = 100
  const len = nums.length
  for (let i = 0; i < len; i++) {
    // 贪心：如果是负数，而k还有盈余，就把负数反过来
    if (k > 0 && nums[i] < 0) {
      nums[i] = 0 - nums[i]
      k--
    }
    // 记录最小值
    if (minNum > nums[i]) {
      minNum = nums[i]
    }
    result += nums[i]
  }
  // 如果k没剩，那说明能转的负数都转正了，已经是最大和，返回sum
  // 如果k有剩，说明负数已经全部转正，所以如果k还剩偶数个就自己抵消掉，不用删减，如果k还剩奇数个就减掉2倍最小正数。
  if (k > 0 && k % 2 > 0) {
    result += 0 - minNum * 2
  }
  return result
}
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
