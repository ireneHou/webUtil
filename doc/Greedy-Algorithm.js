/**
 * 举例:贪心算法
 *  @param {number} money 总金额 656
 * @param {number[]} moneysNum 纸币金额 [1, 5, 10, 50, 100] 
 * @param {number[]} moneysCount 对应纸币数量 [5, 2, 2, 3, 5]
 * 
 * */

function solve(money, moneysNum, moneysCount) {
  let pay = [] // 金额对应的数量
  let num = 0
  const n = moneysNum.length
  for (let i = n - 1; i >= 0; i--) {
    if (money < moneysNum[i]) continue
    let c = Math.min(money / moneysNum[i], moneysCount[i]) // 每一个所需要的张数 
    c = parseInt(c)
    money = money - c * moneysNum[i]
    num += c // 总张数 
    pay.unshift({
      [moneysNum[i]]: c
    })
  }
  if (money > 0) num = -1
  return num
}