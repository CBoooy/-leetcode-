/*
 * @Description:https://leetcode-cn.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let result = n.toString().split('')
  let set = new Set() 
  let go = true

  while (go) {
    let sum = 0
    for (let item of result) {
      sum += item * item 
    }

    // 这里放一个set，其中保存的都是运算后得到的结果，如果在这之中
    // 出现重复的，则就表示进入了循环，永远不可能变成1
    if (set.has(sum)) {
      return false
    } else {
      set.add(sum)
    }
    
    if (sum == 1) {
      go = false
    } else {
      result = sum.toString().split('')
    } 
  }
  return true
  
};

let n = 19

console.log(isHappy(n));
