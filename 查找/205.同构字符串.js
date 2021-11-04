/*
 * @Description:https://leetcode-cn.com/problems/isomorphic-strings/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  /**
   * 思考：从题意上，考的还是双射，290的简化版。要维护两张hash表
   */

  s = s.split('');
  let map1 = new Map(); //s>t
  let map2 = new Map(); //t>s

  if (s.length !== t.length) return false;
  for (let [index, sValue] of s.entries()) {
    let tValue = t[index];
    if (map1.has(sValue) || map2.has(tValue)) {
      if (map1.get(sValue) !== tValue && map2.get(tValue) !== sValue) {
        console.log(sValue, tValue);
        return false;
      }
    } else {
      map1.set(sValue, tValue);
      map2.set(tValue, sValue);
    }
  }

  return true;
};

let s1 = 'eggda';

let s2 = 'tbbab';

console.log(isIsomorphic(s1, s2));
