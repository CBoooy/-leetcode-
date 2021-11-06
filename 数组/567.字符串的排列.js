/*
 * @Description:https://leetcode-cn.com/problems/permutation-in-string/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) { 
  //s1是小，s2是大

  let store1 = new Array(26).fill(0)
  let store2 = new Array(26).fill(0);

  for (let item in s1) {
    let index = s1.charCodeAt(item) - 97
    store1[index]++
  }

  let left = 0, right = s1.length - 1;

  if(s1.length>s2.length) return false
  while (right < s2.length) {
    for (let i = left; i <= right; i++){
      let index = s2.charCodeAt(i) - 97
      store2[index]++
      
    } 

    if (store1.join('') === store2.join('')) return true

    store2 = new Array(26).fill(0);
    left++
    right++
  }
  
  return false
};


let s1 = 'ab',s2 = 'eidbao'
console.log(checkInclusion(s1,s2));
