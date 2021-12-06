/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let rankArr = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  let result = []
  let scoreSort = JSON.parse(JSON.stringify(score))
  scoreSort.sort((a, b) => b - a)
  const len = score.length
  for (let i = 0; i < len; i++) {
      const index = scoreSort.findIndex(r => score[i] === r)
      result.push(rankArr[index] || String(index + 1))
  }
  return result
};