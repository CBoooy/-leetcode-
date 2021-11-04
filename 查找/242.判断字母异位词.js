/*
 * @Description:https://leetcode-cn.com/problems/valid-anagram/
 */

/**
 * 这个题，就是考察记录。因为仅以字母出现次数为判断依据，
 *
 * 那么，只需要：
 *
 * s中出现：次数加一
 * t中出现，次数减一，减到0，删除这个项
 *
 * 方法二：排序后比较
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  if (s.length !== t.length) return false;

  for (let item of s) {
    if (map.has(item)) {
      let value = map.get(item) + 1;
      map.set(item, value);
    } else {
      map.set(item, 1);
    }
  }

  for (let item of t) {
    if (map.has(item)) {
      let value = map.get(item);
      value = value - 1;
      if (value === 0) {
        map.delete(item);
      } else {
        map.set(item, value);
      }
    }
  }

  if (map.size === 0) {
    return true;
  } else {
    return false;
  }
};

let s1 = 'abacdda';
let s2 = 'acbddad';

console.log(isAnagram(s1, s2));
