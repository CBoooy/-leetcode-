/*
 * @Description:https://leetcode-cn.com/problems/4sum-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let map1 = new Map() //存num1，num2所有可能存在的和，及其出现次数 
  let result = 0
  
  for (let item1 of nums1) {
    for (let item2 of nums2) {
      let sum = item1 + item2
      if (map1.has(sum)) {
        map1.set(sum,map1.get(sum)+1)
      } else {
        map1.set(sum,1)
      }
    }
  }

  for (let item1 of nums3) { 
    for (let item2 of nums4) {
      let sum = item1 + item2;
      //遍历nums3，nums4中可能出现的和的组合，
      //如果map1中有一个数，满足value + sum = 0，则，就将这个数出现的次数和result相加。
      let rest = 0 - sum
      if (map1.has(rest)) {
        result += map1.get(rest)
      }
    }
  } 
  return result 
};

let nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];

console.log(fourSumCount(nums1,nums2,nums3,nums4));
