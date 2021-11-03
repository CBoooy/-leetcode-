/*
 * @Description:https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 */

/**
 * 思路：滑动窗口
 * left：始终指向当前滑动窗口的初始值，初始值：-1，
 * right：始终指向当前滑动窗口的终值，初始值-1，
 * minLength：最小长度,
 * sum:窗口内的总和 
 * 
 * 边界判断：arr的长度<=0,
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = -1, right = -1;
  let len = nums.length;
  let minLength = len;
  let sum = 0;

  while (left <= right) {
    if (sum > target) {
      //移动左指针
    } else {
      //移动右指针

    }


  }
};
