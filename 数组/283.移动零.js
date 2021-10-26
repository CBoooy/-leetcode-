 
/*  
链接：https://leetcode-cn.com/problems/move-zeroes 
*/

/*

  思路：双指针，
    * move指针遍历数组，范围是[0,arr.length - 1 ]
    * sign指针有两个选择，一：！0的最后一个。二：0的第一个。这里选择一，为了保持循环不变量的内涵。初始值：-1
    
    move在遍历的过程中，当arr[move] == 0 ，则交换arr[move],arr[sign]
    之后，sign++
*/
 
 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let  moveZeroes = function(nums) {
  let sign = -1;
  for (let move in nums) {
    if (nums[move] !== 0) {
      [nums[move], nums[sign + 1]] = [nums[sign + 1], nums[move]]
      sign++
    }
  }
};

module.exports = moveZeroes;
