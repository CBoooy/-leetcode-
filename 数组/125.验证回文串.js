/*
 * @Description: https://leetcode-cn.com/problems/valid-palindrome/
 */

/**
 * 思路：
 * 
 *  1 两个栈，顺序出栈，去掉标点空格，比较头
 *  2 去掉其中的空格和标点，保留字符和数字，反转字符串后比较
 *  3 对撞指针
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //用对撞指针 
  let reg = /[a-zA-Z0-9]/;

  //去掉空格
  let str2 = s.replace(/ /g, '').toLowerCase()

  console.log(`st2:${reg.test(str2)}`);
  
  let left = 0, right = str2.length - 1; 

  while (left <= right) {
    if (reg.test(str2[left])) {
      if (reg.test(str2[right])) {
        if (str2[left] === str2[right]) {
          left++;
          right--
        } else {
          console.log(`${s}不是回文串`);
          return false
        }
      }else{
        right--
      }
    } else {
      left++
    }
  } 
  return true 
};

module.exports = isPalindrome
