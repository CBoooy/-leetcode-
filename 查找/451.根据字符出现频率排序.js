/*
 * @Description: https://leetcode-cn.com/problems/sort-characters-by-frequency/
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  
  let map = new Map();
  let result = '';
  //用map统计频率 
  for (let item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  //将map存入数组，根据频率排序数组
  let map2 = [...map].sort((a, b) => {
    return b[1] - a[1];
  }); 
  //按照map2的顺序构造字符串
  for (let item of map2) {
    result += item[0].repeat(item[1]);
  }

  return result
};

let str = 'Aabb';

console.log(frequencySort(str));
