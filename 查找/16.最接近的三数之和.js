/*
 * @Description:https://leetcode-cn.com/problems/3sum-closest/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = Infinity;
  let length = nums.length;

  nums.sort((a, b) => {
    return a - b;
  });

  for (let [index, item] of nums.entries()) {
    let left = index + 1,
      right = length - 1;

    if (index >= 1 && nums[index] === nums[index - 1]) continue;

    while (left < right) {
      let sum = item + nums[left] + nums[right];

      if (sum === target) {
        return target;
      }
      //用两个绝对值比较，如果当前的sum距离target比min距离target的近，则更换min
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
      }

      if (sum < target) {
        // 优化：去重
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        left++; //变大
      } else {
        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      }
      //如果绝对值更小，说明离target更近，则更新，
    }
  }
  return min;
};

let arr = [0, 2, 1, -3];
let target = 1;

console.log(threeSumClosest(arr, target));
