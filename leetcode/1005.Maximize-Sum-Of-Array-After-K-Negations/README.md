# [1005. Maximize Sum Of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)

## 题目

给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

Given an integer array nums and an integer k, modify the array in the following way:

选择某个下标 i  并将 nums[i] 替换为 -nums[i] 。

choose an index i and replace nums[i] with -nums[i].

重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

You should apply this process exactly k times. You may choose the same index i multiple times.

以这种方式修改数组后，返回数组 可能的最大和 。

Return the largest possible sum of the array after modifying it in this way.

Example:

```
Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
```

## 题目大意

给你一个数组，k 次转换数的正负，求 nums 最大和

## 解题思路

nums 排序后循环且 k>0 时，将 nums 的负数转正;

循环后，k=0 时，说明能转的负数都已转正，已经是最大和

循环后，k>0 时，k 为偶数可自己抵消，k 为奇数就将最小正数转为负数即可
