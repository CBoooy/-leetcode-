/*
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/***
 * 也是283的变体。
 * 
 * 思路：两个限制：O1，有序数组，去重。这就不能申请数组，只能用指针，双指针，
 *  * sign：指向已完成数组的最后一项。初始值为 -1
 *  * move：遍历数组,指向不同类的第一个
 *  * 由于arr是有序的，当arr[move]!==arr[sign],则表示move已经指向了下一个有序数列的第一个，
 *  * 此时，将move和sign+1项交换就行了
 *  * 最后，删除sign+1后面的
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let sign = -1;
  for (let move in nums) {
    if (nums[move] !== nums[sign]) {
      [nums[move], nums[sign + 1]] = [nums[sign + 1], nums[move]]
      sign++
    }
    
  }

  nums.splice(sign + 1)

  console.log(nums);

  return nums.length
};

module.exports = removeDuplicates
