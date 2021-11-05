/*
 * @Description:https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  //滑动窗口解法的关键是：窗口滑动的时机

  //store 保存p中每个字符
  
  function resetStore () { 
    let store = new Map()
    for (let item of p) {
      if (store.has(item)) {
        let value = store.get(item) + 1;
        store.set(item, value);
      } else {
        store.set(item, 1);
      }
    }

    return store
  }

  let store = resetStore() 

  //左右窗口边界，其初始值，设置初始窗口
  let left = 0,
    right = p.length - 1;
  let result = [];

  while (left < s.length) {
    console.log(left,right,store);
    for (let i = left; i <= right; i++) {
      if (store.has(s[i])) {
        let value = store.get(s[i]) - 1
        store.set(s[i], value)
      }
    }

    console.log(store);

    let is = true;
    store.forEach((value) => {
      if (value !== 0) {
        is = false
      }
    })

    if (is) {
      result.push(left)
    }

    store = resetStore(); 
    right++;
    left++;
 
  }

  return result;
};

let s = 'cbaebabacd',
  p = 'abc';

console.log(findAnagrams(s, p));
