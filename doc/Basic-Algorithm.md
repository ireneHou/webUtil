本课程会讲到哪些算法和数据结构？第一部分将集中探讨基础数据结构、排序、查找。主题包括：并查算法、二分查找、栈、队列、背包、插入排序、选择排序、希尔排序、快速排序、三路快排、归并排序、堆排序、二分堆、二分查找树、红黑树、分离链接和线性探测哈希表、Graham 扫描、kd 树。第二部分将集中探讨图和字符串处理算法。主题包括：深度优先搜索、宽度优先搜索、拓扑排序、Kosaraju-Sharir 算法、Kruskal 算法、Prim 算法、Dijkistra 算法、Bellman-Ford 算法、Ford-Fulkerson 算法、LSD 基数排序算法、MSD 基数排序算法、三路基数快排算法、多路 trie 算法、三元查找 trie 算法、Knuth-Morris-Pratt 算法、Boyer-Moore 算法、Rabin-Karp 算法、正则匹配、行程长度编码、Huffman 编码、LZW 压缩、Burrows-Wheeler 变换。

基础算法五大基础算法（枚举、递归、分治、贪心、模拟）

##什么是枚举一、枚举法枚举法，本质上就是搜索算法。

基本思想：枚举也称作穷举，指的是从问题所有可能的解的集合中一一枚举各元素。用题目中给定的检验条件判定哪些是无用的，哪些是有用的。能使命题成立。即为其解。优缺点：优点：算法简单，在局部地方使用枚举法，效果十分的好缺点：运算量过大，当问题的规模变大的时候，循环的阶数越大，执行速度越慢

#代码示例：

=== end === ##什么是递归

#代码示例：

=== end === ##什么是分治

#代码示例：

=== end === ##什么是贪心

#代码示例：

```
可参考 Greedy-Algorithm.js
```

=== end === ##什么是模拟

#代码示例：

=== end ===

<code>
  /**
    * 广度优先
    * 队列  先进先出
    */
  function wideTraversal(node, childName) {
    let stack = node,
      data = []
    while (stack.length != 0) {
      let shift = stack.shift()
      // console.log('shift=',shift,stack.length)
      const obj = {
        itemCode: shift.itemCode,
        itemName: shift.itemName,
        fullName:
          (shift.fullName ? shift.fullName + ' / ' : '') + shift.itemName
      }
      data.push(obj)
      let children = shift[childName]
      if (children) {
        for (let i = 0; i < children.length; i++) {
          stack.push({ ...children[i], ...{ fullName: obj.fullName } })
        }
      }
    }
    return data
  }
</code>
