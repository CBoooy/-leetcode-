/*
 * @Description:https://leetcode-cn.com/problems/contains-duplicate-iii/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, target) {
  let map = new Map()
  /**
   * nums:[1,2,3,1]
   * map:{
   *  nums[i]:nums[i]最后一次出现的位置
   *  1:3
   *  2:0
   *  3:2
   * }
   */

   
};

let nums = [1, 2, 3, 1],
  k = 3,
  t = 0;

  console.log(containsNearbyAlmostDuplicate(nums,k,t));
