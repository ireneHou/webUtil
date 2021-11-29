/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length
  if (n <= 1) return n

  let result = 0
  // 数组集合，记录每个字符是否出现过
  let arr = []
  let index = -1
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      let word = s.charAt(i - 1)
      arr.splice(0, arr.findIndex(a => a == word) + 1)
    }
    while (!arr.includes(s.charAt(index + 1)) && index + 1 < n) {
      // 不断地移动右指针
      arr.push(s.charAt(index + 1))
        ++index
    }
    result = Math.max(result, index - i + 1)
  }
  return result
};