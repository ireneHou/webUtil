/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let result = 1
  let wordCount = 1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (i + 1 < len && s[i] === s[i + 1]) {
      wordCount++;
      result = Math.max(wordCount, result)
    } else {
      wordCount = 1
    }
  }
  return result
};