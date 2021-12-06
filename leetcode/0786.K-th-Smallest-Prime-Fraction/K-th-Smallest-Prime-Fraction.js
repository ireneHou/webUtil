/**
 * [自定义排序] [时间复杂度O(n2logn)] [空间复杂度O(n2)]
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  if (arr.length === 2) return arr

  let result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      result.push([arr[i], arr[j]])
    }
  }
  result.sort((x, y) => x[0] * y[1] - y[0] * x[1]);
  return result[k - 1];
};