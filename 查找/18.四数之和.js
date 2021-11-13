/*
 * @Description:https://leetcode-cn.com/problems/4sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  //三数之和的基础上，在加一个循环,即两层循环，加双指针
  let length = nums.length;
  let result = [];
 
  nums.sort((a, b) => {  return a - b;  }); //排序nums

  if (length <= 3) return result;//特判

  for (let [a, item] of nums.entries()) {
    if (nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < length; b++) {
      //b动一圈后，a才开始动。
      let left = b + 1;
      let right = length - 1;
      //下面就是三数之和的思路了
      //去重,但a+1的那位不用去重,nums[a+1]可以等于nums[a],但nums[a+2]不能等于nums[a]
      if (b>= a +2 && nums[b] === nums[b - 1]) continue;

      while (left < right) {
        let sum = item + nums[b] + nums[left] + nums[right]; 
        if (sum === target) {
          result.push([item, nums[b], nums[left], nums[right]]);
          // 做去重处理：
          while (nums[left + 1] === nums[left] && left < right) {  left++; }
          while (nums[right - 1] === nums[right] && left < right) { right--; }
          //当代码运行到这里，left指向不重复的下一个，right也指向不重复的下一个
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else { 
          right--;
        }
      }
    }
  } 
  return result;
};
 

let arr = [2, 2, 2, 2, 2,3,3,1,1];
let target = 8;

console.log(fourSum(arr, target));
