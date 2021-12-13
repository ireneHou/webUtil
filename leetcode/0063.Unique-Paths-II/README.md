# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

## 题目

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

Now consider if some obstacles are added to the grids. How many unique paths would there be?

网格中的障碍物和空位置分别用 1 和 0 来表示。

An obstacle and space is marked as 1 and 0 respectively in the grid.

Example 1:

![robot maze][base64robot_maze]

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

## 题目大意

## 解题思路

[base64robot_maze]: ./robot_maze.jpg
