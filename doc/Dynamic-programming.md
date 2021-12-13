# [动态规划](https://www.cxyxiaowu.com/6781.html)

## 导言

动态规划：通过空间换取时间的算法思想（算法面试当中的重点和难点）

## 什么是动态规划

![Explain dynamic programming][base64dynamicprogramming]

用一句话解释动态规划就是 “<font color="#e96900">记住你之前做过的事</font>”，如果更准确些，其实是 “<font color="#e96900">记住你之前得到的答案</font>”。

对于一个动态规划问题，我们只需要从两个方面考虑，那就是 <font color="#e96900">找出问题之间的联系</font>，以及 <font color="#e96900">记录答案</font>，这里的难点其实是找出问题之间的联系，记录答案只是顺带的事情，利用一些简单的数据结构就可以做到。

## 思考动态规划问题的四个步骤

一般解决动态规划问题，分为四个步骤，分别是

- 问题拆解，找到问题之间的具体联系
- 状态定义
- 递推方程推导
- 实现

这里面的重点其实是前两个，如果前两个步骤顺利完成，后面的递推方程推导和代码实现会变得非常简单。

这里还是拿 Quora 上面的例子来讲解，“1+1+1+1+1+1+1+1” 得出答案是 8，那么如何快速计算 “1+ 1+1+1+1+1+1+1+1”，我们首先可以对这个大的问题进行拆解，这里我说的大问题是 9 个 1 相加，这个问题可以拆解成 1 + “8 个 1 相加的答案”，8 个 1 相加继续拆，可以拆解成 1 + “7 个 1 相加的答案”，… 1 + “0 个 1 相加的答案”，到这里，第一个步骤 已经完成。

状态定义 其实是需要思考在解决一个问题的时候我们做了什么事情，然后得出了什么样的答案，对于这个问题，当前问题的答案就是当前的状态，基于上面的问题拆解，你可以发现两个相邻的问题的联系其实是 后一个问题的答案 = 前一个问题的答案 + 1，这里，状态的每次变化就是 +1。

定义好了状态，递推方程就变得非常简单，就是 dp[i] = dp[i - 1] + 1，这里的 dp[i] 记录的是当前问题的答案，也就是当前的状态，dp[i - 1] 记录的是之前相邻的问题的答案，也就是之前的状态，它们之间通过 +1 来实现状态的变更。

最后一步就是实现了，有了状态表示和递推方程，实现这一步上需要重点考虑的其实是初始化，就是用什么样的数据结构，根据问题的要求需要做那些初始值的设定。

```
function dpExample(n) {
  let dp = new Array(n + 1)
  dp[0] = 0
  for (let i = 1; i <= n; ++i) {
    dp[i] = dp[i - 1] + 1
  }
  return dp[n]
}
```

## 题目实战

- 爬楼梯（LeetCode 第 70 号问题）

- 三角形最小路径和（LeetCode 第 120 号问题）

- 最大子序和（LeetCode 第 53 号问题）

通过这几个简单的例子，相信你不难发现，解动态规划题目其实就是拆解问题，定义状态的过程，严格说来，动态规划并不是一个具体的算法，而是凌驾于算法之上的一种 思想 。

这种思想强调的是从局部最优解通过一定的策略推得全局最优解，从子问题的答案一步步推出整个问题的答案，并且利用空间换取时间。从很多算法之中你都可以看到动态规划的影子，所以，还是那句话 技术都是相通的，找到背后的本质思想是关键。

[base64dynamicprogramming]: ./Dynamic-Programming.png