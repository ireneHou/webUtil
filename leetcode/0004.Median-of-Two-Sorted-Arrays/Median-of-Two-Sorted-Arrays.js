<<<<<<< HEAD
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  const len = arr.length
  if (len <= 1) return arr[0] || 0
  let result = 0
  let index = Math.floor(len / 2)
  if (len % 2 === 0) {
    result = (arr[index - 1] + arr[index]) / 2
  } else {
    result = arr[index]
  }
  return result;
=======
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => a - b)
  const len = arr.length
  if (len <= 1) return arr[0] || 0
  let result = 0
  let index = Math.floor(len / 2)
  if (len % 2 === 0) {
    result = (arr[index - 1] + arr[index]) / 2
  } else {
    result = arr[index]
  }
  return result;
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
};