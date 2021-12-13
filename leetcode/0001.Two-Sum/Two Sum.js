<<<<<<< HEAD
/** 
 * [暴力枚举-内存消耗少]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

/** 
 * [优解：哈希表-执行用时少]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_2 = function (nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
=======
/** 
 * [暴力枚举-内存消耗少]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

/** 
 * [优解：哈希表-执行用时少]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_2 = function (nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
};