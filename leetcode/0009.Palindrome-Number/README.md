# [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

## 题目

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

Given an integer x, return true if x is palindrome integer.

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example:

```
Input: x = 121
Output: true
```

## 题目大意

## 解题思路

第一个想法是将数字转换为字符串，并检查字符串是否为回文。但是，这需要额外的非常量空间来创建问题描述中所不允许的字符串。

第二个想法是将数字本身反转，然后将反转后的数字与原始数字进行比较，如果它们是相同的，那么这个数字就是回文。
