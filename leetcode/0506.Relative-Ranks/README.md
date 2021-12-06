# [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/)

## 题目

给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。

You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

· 名次第 1 的运动员获金牌 "Gold Medal" 。

· The 1st place athlete's rank is "Gold Medal".

· 名次第 2 的运动员获银牌 "Silver Medal" 。

· The 2nd place athlete's rank is "Silver Medal".

· 名次第 3 的运动员获铜牌 "Bronze Medal" 。

· The 3rd place athlete's rank is "Bronze Medal".

· 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。

· For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。

Return an array answer of size n where answer[i] is the rank of the ith athlete.

Example:

```
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
```

## 题目大意

找到每个运动员的相对名次，并同时给前三名标记为 "Gold Medal", "Silver Medal", "Bronze Medal"，其余的运动员则标记为其相对名次。

## 解题思路

将所有的运动员按照成绩的高低进行排序，然后将按照名次进行标记即可。
