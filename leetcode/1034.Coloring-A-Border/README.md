# [1034. Coloring A Border](https://leetcode.com/problems/coloring-a-border/)

## 题目

给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color 。网格中的每个值表示该位置处的网格块的颜色。

You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location.

当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一 连通分量 。

Two squares belong to the same connected component if they have the same color and are next to each other in any of the 4 directions.

连通分量的边界 是指连通分量中的所有与不在分量中的网格块相邻（四个方向上）的所有网格块，或者在网格的边界上（第一行/列或最后一行/列）的所有网格块。

The border of a connected component is all the squares in the connected component that are either 4-directionally adjacent to a square not in the component, or on the boundary of the grid (the first or last row or column).

请你使用指定颜色  color 为所有包含网格块  grid[row][col] 的 连通分量的边界 进行着色

You should color the border of the connected component that contains the square grid[row][col] with color.

并返回最终的网格  grid。

Return the final grid.

Example:

```
Input: grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
Output: [[3,3],[3,2]]
```

## 题目大意

## 解题思路

matrix  矩阵
grid  网格
represents  代表
square  方块
connected component  连通分量
adjacent  相邻
boundary  边界