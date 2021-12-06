/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let result = s.split(' ')
  result = result.splice(0, k)
  return result.join(' ')
};