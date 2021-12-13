# [794. Valid Tic-Tac-Toe State](https://leetcode.com/problems/valid-tic-tac-toe-state/)

## 题目

给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。

Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。

The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.

以下是井字游戏的规则：

Here are the rules of Tic-Tac-Toe:

- 玩家轮流将字符放入空位（' '）中。

- Players take turns placing characters into empty squares ' '.

- 玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。

- The first player always places 'X' characters, while the second player always places 'O' characters.

- 'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。

- 'X' and 'O' characters are always placed into empty squares, never filled ones.

- 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。

- The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.

- 当所有位置非空时，也算为游戏结束。

- The game also ends if all squares are non-empty.

- 如果游戏结束，玩家不允许再放置字符。

- No more moves can be played if the game is over.

Example:

```
Input: board = ["O  ","   ","   "]
Output: false
Explanation: The first player always plays "X".
```

## 题目大意

## 解题思路
