<<<<<<< HEAD
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let result = s.split(' ')
  result = result.splice(0, k)
  return result.join(' ')
=======
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let result = s.split(' ')
  result = result.splice(0, k)
  return result.join(' ')
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
};