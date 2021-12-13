/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = (nums, k) => {
  const ans = [0, 0, 0];
  let sum1 = 0,
    maxSum1 = 0,
    maxSum1Idx = 0;
  let sum2 = 0,
    maxSum12 = 0,
    maxSum12Idx1 = 0,
    maxSum12Idx2 = 0;
  let sum3 = 0,
    maxTotal = 0;
  for (let i = k * 2; i < nums.length; ++i) {
    sum1 += nums[i - k * 2];
    sum2 += nums[i - k];
    sum3 += nums[i];
    if (i >= k * 3 - 1) {
      if (sum1 > maxSum1) {
        maxSum1 = sum1;
        maxSum1Idx = i - k * 3 + 1;
      }
      if (maxSum1 + sum2 > maxSum12) {
        maxSum12 = maxSum1 + sum2;
        maxSum12Idx1 = maxSum1Idx;
        maxSum12Idx2 = i - k * 2 + 1;
      }
      if (maxSum12 + sum3 > maxTotal) {
        maxTotal = maxSum12 + sum3;
        ans[0] = maxSum12Idx1;
        ans[1] = maxSum12Idx2;
        ans[2] = i - k + 1;
      }
      sum1 -= nums[i - k * 3 + 1];
      sum2 -= nums[i - k * 2 + 1];
      sum3 -= nums[i - k + 1];
    }
  }
  return ans;
}


// var maxSumOfThreeSubarrays = function (nums, k) {
//     if (nums <= k) return nums
//     const n = nums.length
//     let objArr = []
//     for (let i = 0; i < (n - k) + 1; i++) {
//         let arr = [nums[i]] // 是否存在重复值
//         let count = nums[i] // 总值
//         let keys = [i]
//         for (let j = i + 1; j <= n; j++) {
//             if (arr.length === k) {
//                 break
//             }
//             const key = arr.findIndex(r => r === nums[j])
//             if (key !== -1) {
//                 arr = []
//                 count = null
//                 break
//             }
//             count += nums[j]
//             arr.push(nums[j])
//             keys.push(j)
//         }
//         // 不重叠的组合数组加入objArr
//         if (count !== null) {
//             objArr.push({
//                 index: i,
//                 keys: keys,
//                 count: count,
//                 arr: arr
//             })
//         }
//     }
//     // 根据count排序
//     objArr.sort((a, b) => b.count - a.count)
//     // console.log(objArr)
//     if(k===1){
//         let arr = [objArr[0].index,objArr[1].index,objArr[2].index]
//         return arr.sort()
//     }


//     let ans = []
//     const oLen = objArr.length
//     for (let m = 0; m < oLen; m++) {
//         const x = objArr[m].index
//         let combination = [x]
//         let cNum = x
//         for (let n = m + 1; n < oLen; n++) {
//             const y = objArr[n].index
//             let flag = combination.every(r=>{
//                 if(r>y) return r>=y+k
//                 if(r<y) return r<=y-k
//             })
//             if(flag){
//                 combination.push(y)
//                 cNum+=y
//             }
//             if (combination.length === 3) {
//                 ans.push({...objArr[m],...{
//                     cNum:cNum,
//                     combination: combination
//                 }})
//                 break;
//             }
//         }
//     }
//     if(ans.length>0){
//         ans.sort((a, b) => a.cNum - b.cNum)
//         return ans[0].combination.sort()
//     }
//     return []
// };