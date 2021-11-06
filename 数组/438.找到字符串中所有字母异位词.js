/*
 * @Description:https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  
  let store = new Array(26).fill(0) 
  for (let item in p) { 
    //将字符和store数组下标一一对应
    let index = p.charCodeAt(item)-97
    store[index]++ 
  }
  let window = new Array(26).fill(0);
  let left = 0, right = p.length - 1;
  let result = []
  
  while (right < s.length) {  
    let i = left
    while (i <= right) {
      //将字符和window数组下标一一对应
      let index = s.charCodeAt(i) - 97;
      window[index]++;  
      i++
    }

    if (store.join('') === window.join('')) {
      result.push(left)
    }
 
    window = new Array(26).fill(0);
    left++
    right++
  } 
  return result 
}

let s = 'ababa', p = 'aba';
console.log('结果：',findAnagrams(s, p));
