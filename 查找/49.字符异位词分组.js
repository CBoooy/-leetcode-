/*
 * @Description:https://leetcode-cn.com/problems/group-anagrams/
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  let result = []
  /**
   * 这个map长这样：
   * {
   *  'abc':['abc','cba','bac'],
   *  'def':['def']
   * }
   */

  for (let item of strs) {
    //首先将item进行排序,排序后的字符串作为键名，
    // 如果有这个键名，说明找到字符异位词了，加入键值数组
    let item2 = Array.from(item).sort().join('')
    if (map.has(item2)) {
      map.get(item2).push(item) 
    } else {
      map.set(item2,[item])
    }
  }

  for (let item of map.values()) {
    result.push(item)
  }
  return result
};

let strs = [''];


console.log(groupAnagrams(strs));


