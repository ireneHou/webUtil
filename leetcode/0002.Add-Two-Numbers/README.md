<<<<<<< HEAD
# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## 题目

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

```
Input: num1 = [2,4,3], num2 = [5,6,4]
Output: [7,0,8]

(2 -> 4 -> 3) + (5 -> 6 -> 4)
7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## 题目大意

2 个逆序的链表，要求从低位开始相加，得出结果也逆序输出，返回值是逆序结果链表的头结点。

## 解题思路

需要注意的是各种进位问题。

极端情况，例如

```
Input: (9 -> 9 -> 9 -> 9 -> 9) + (1 -> )
Output: 0 -> 0 -> 0 -> 0 -> 0 -> 1
```

为了处理方法统一，可以先建立一个虚拟头结点，这个虚拟头结点的 Next 指向真正的 head，这样 head 不需要单独处理，直接 while 循环即可。另外判断循环终止的条件不用是 p.Next ！= nil，这样最后一位还需要额外计算，循环终止条件应该是 p != nil。
=======
# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## 题目

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

你可以假设除了数字 0 之外，这两个数都不会以 0  开头。

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

```
Input: num1 = [2,4,3], num2 = [5,6,4]
Output: [7,0,8]

(2 -> 4 -> 3) + (5 -> 6 -> 4)
7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## 题目大意

2 个逆序的链表，要求从低位开始相加，得出结果也逆序输出，返回值是逆序结果链表的头结点。

## 解题思路

需要注意的是各种进位问题。

极端情况，例如

```
Input: (9 -> 9 -> 9 -> 9 -> 9) + (1 -> )
Output: 0 -> 0 -> 0 -> 0 -> 0 -> 1
```

为了处理方法统一，可以先建立一个虚拟头结点，这个虚拟头结点的 Next 指向真正的 head，这样 head 不需要单独处理，直接 while 循环即可。另外判断循环终止的条件不用是 p.Next ！= nil，这样最后一位还需要额外计算，循环终止条件应该是 p != nil。
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
