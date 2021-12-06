/**
 * [优解：执行用时少]
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  let result = true
  let len = ransomNote.length
  while (len > 0) {
    let word = ransomNote[0]
    if (magazine.includes(word)) {
      magazine = magazine.replace(word, '')
      ransomNote = ransomNote.replace(word, '')
      len--
    } else {
      result = false
      len = 0
    }
  }
  return result
};

/**
 * [优解：map-内存消耗少]
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (let w of ransomNote) {
    map.set(w, (map.get(w) || 0) + 1)
  }
  for (let m of magazine) {
    if (map.has(m)) {
      let count
      map.set(m, count = map.get(m) - 1)
      if (count === 0) map.delete(m)
    }
  }
  return map.size === 0
};