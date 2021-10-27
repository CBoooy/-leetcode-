/*
 * @Description: https://leetcode-cn.com/problems/reverse-string/
 */

/**
 * 限制：原地，O1
 * 
 *  思路：
 * 1 O1，用指针。对撞指针
 * 2 reverse()方法。(这样做就没意思了)
 * 
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }

};

module.exports = reverseString
