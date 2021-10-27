 /*
 * @Description: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * 
 * 思路：有序数组
 * 
 *  1 暴力for
 *  2 二分查找
 *  3 对撞指针
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1;
  
  if (numbers.length < 2) return;

  while (left < right) {
    let sum = numbers[left] + numbers[right]

    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else {
      //按照题意，输出的位置，从1开始算，不是0
      return [left+1 , right+1 ]
    }
  }
};

module.exports = twoSum
