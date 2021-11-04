/*
 * @Description:https://leetcode-cn.com/problems/word-pattern/
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

  // 核心：边存边比较，是否始终满足双射
  let map1 = new Map()//pattern --> s
  let map2 = new Map()//s-->pattern
  let s2 = s.split(' '); 
 
  if (pattern.length !== s2.length) return false;
  
  for (let [index, sValue] of s2.entries()) {
    //index是s2的索引，value是s2的值

    //同一个索引下，pattern对应的那个值
    let pValue = pattern[index]

    //map1找的是pattern对应的单词，然后和同索引下的单词比较，map1.has(pValue)&&map1.get(pValue) === sValue
    //map2找的是s2对应的pattern，然后和同索引下的pattern比较，map2.has(sValue)&& map2.get(sValue) === pValue
    //否则存进去
    
    // if ((map1.has(pValue) && map1.get(pValue) === sValue) && (map2.has(sValue) && map2.get(sValue) === pValue)) {
    //   // 这种情况下出错，你找不出是因为没有，还是因为不相同而出的错，因此，必须把这两种情况分开
    // } 

    if (map1.has(pValue) || map2.has(sValue)) {
      //为什么这里不写成 && ，是因为，'abba'; 'dog cat cat fish';fish和a是一新一旧，旧的a可以通过，通过之后就进入比较阶段
      // 如果两个都是新，则map.set(),
      if (map1.get(pValue) === sValue && map2.get(sValue) === pValue) { 
        continue
      } else {
        console.log(map1.get(pValue), sValue);
        console.log(map2.get(sValue), pValue);
        return false
      }
    } else {
      map1.set(pValue, sValue)
      map2.set(sValue, pValue) 
    } 
  }

  return true
 
};

let pattern = 'abba';
let s = 'dog dog dog dog';

console.log(wordPattern(pattern, s));
