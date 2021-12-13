<<<<<<< HEAD
# [1816. Truncate Sentence](https://leetcode.com/problems/truncate-sentence/)

## 题目

句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.

给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​ 使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。

You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

Example:

```
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
```

## 题目大意

返回句子 s 中的前 k 个单词

## 解题思路

由题意可知，除了最后一个单词，每个单词后面都跟随一个空格。根据空格拆分句子，然后拼接 k 个单词就可以了。
=======
# [1816. Truncate Sentence](https://leetcode.com/problems/truncate-sentence/)

## 题目

句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.

给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​ 使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。

You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

Example:

```
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
```

## 题目大意

返回句子 s 中的前 k 个单词

## 解题思路

由题意可知，除了最后一个单词，每个单词后面都跟随一个空格。根据空格拆分句子，然后拼接 k 个单词就可以了。
>>>>>>> 38b7e0ddd1b3b75556d0d229a328136e5c64d472
