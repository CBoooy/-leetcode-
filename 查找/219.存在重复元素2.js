/*
 * @Description:https://leetcode-cn.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
let map = new Map()
  /**
   * arr = [1,2,1]
   * map:{
   *  nums[i]:[i,j]
   *  数组中元素值:元素值的下标组成的集合
   *  1 : [0,2]
   * }
   */

  for (let [index, item] of nums.entries()) {
    //将nums存入map ,并在存入的时判断。与前一个的差是否<=k?
    if (map.has(item)) {
      let value = map.get(item)
      if (index - value[value.length - 1] <= k) {
        return true
      } else {
        value.push(index) 
      }
    } else {
      map.set(item,[index])
    }
  } 

  return false
};

let nums = [1, 2, 3, 1, 2, 3];
let k = 2
console.log(containsNearbyDuplicate(nums,k));
