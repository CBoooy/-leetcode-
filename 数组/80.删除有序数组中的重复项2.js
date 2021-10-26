/*
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/***
 * 限制：O1，原地，每个元素最多出现两次
 *
 * 思路：
 * O1即表示用指针。
 *  * sign：指向已完成数据的最后一项，初始值-1
 *  * move：遍历数组
 * 原地：一般原地从哪个方向思考？
 * 元素最多出现两次：
 *  思考：
 *    1 什么时候交换？
 *      move进入新的子序列
 *    2 什么时候不能交换？（取反就是能交换）
 *      已经出现了两次不能交换，其余都可以交换。
 * 那如果最多出现三次？怎么做？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let sign = -1;
  for (let move in nums) {
    if (nums[move] !== nums[sign] || nums[move] !== nums[sign - 1]) {
      sign++;
      // 交换move和sign+1项。
      [nums[move], nums[sign]] = [nums[sign], nums[move]];
    }
  }

  nums.splice(sign + 1);
  console.log(nums);

  return nums.length;
};

module.exports = removeDuplicates;
