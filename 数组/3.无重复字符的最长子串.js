/*
 * @Description:https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * 思路：在滑动窗口中做记录，快慢指针，快指针，每移动一个，在obj中做记录，
 *  如果obj中有，则更新慢指针，同时更新result，更新重复的那个
 *  如果没有，更新快指针，同时更新result，
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let slow = 0, fast = 0;
  let result = 0;
  let set = new Set()

  while (fast < s.length) {
    if (set.has(s[fast])) {
      while (s[slow] !== s[fast]) {
        //要把在slow之前的所有删掉，set中保存的，永远是[slow,fast]之间的无重复的值。
        set.delete(s[slow]);
        slow++;
      }
      slow++
    } else {
      set.add(s[fast])
    } 
    result = Math.max(result, fast - slow + 1)
    console.log(slow);
    fast++
  }

  return result  
};


let str = 'abba';
 
console.log(lengthOfLongestSubstring(str));
