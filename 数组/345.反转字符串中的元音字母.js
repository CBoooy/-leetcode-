/*
 * @Description:https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 */

/***
 * 思路：
 * 
 *  1 反转，可用对撞指针，然后交换。
 * 
 *  left : 始终指向left中当前需要交换的那个，初始值为-1。
 *  right：始终指向right中，当前需要交换的那个，初始值为arr.length 
 * 
 *  
 *  
 */

  /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = s.split('') 
  let left = 0, right = arr.length-1; 

  while (left < right) {
    while (!/[aeiouAEIOU]/.test(arr[left])&&left<right) { 
      left++  
    }
    while (!/[aeiouAEIOU]/.test(arr[right]) && left < right) {
      right--;
    }
    if (left < right) { 
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    } else {
      break
    }
    
  } 

  return arr.join('') 
  
};

module.exports = reverseVowels 
