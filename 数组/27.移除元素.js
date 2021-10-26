/*
 * @Description:https://leetcode-cn.com/problems/remove-element/
 */

/**
  思路：283题目的变体，只是将0改成了val，在其基础上，将[sign+1 , length - 1 ]删除就行了
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let sign = -1;
  for (let move in nums) {
    // 如果arr[move]!== val 将arr[move]移动到arr[sign + 1 ]位置，也就是数组最前面
    if (nums[move] !== val) {
      [nums[move], nums[sign + 1]] = [nums[sign + 1], nums[move]];
      sign++;
    }
  }
  //此时，原数组：[1,val,3,val]变成了[1,3,val,val],
  //sign指向3，即nums[1],现在只需要删除nums[1]之后的就行了

  nums.splice(sign + 1);
  return nums.length;
};

module.exports = removeElement;
