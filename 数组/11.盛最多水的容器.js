/*
 * @Description:https://leetcode-cn.com/problems/container-with-most-water/
 */

/***
 * 思路：
 *  
 *  S = (right-left)*max(arr[left],arr[right])
 * 
 *  其中，不可控的有（right-left）
 * 
 *  可控的是arr[left],arr[right]
 * 
 *  方法：使用对撞指针。
 * 
 *  left：左指针，初始值为0，遇到right停止。
 *  right：右指针，初始值为arr.length - 1。遇到left停止。
 * 
 *  本质：移动短板，使其有可能变大
 * 
 *  当arr[left] < arr[right]时候，left++，
 *  当arr[left] > arr[right],right--
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length -1;
  let S = 0;
  let { min, max, abs } = Math

  if(right <= 0) return 

  while (left < right) {
    S = max(
      S,
      abs((right-left)*min(height[left],height[right]))
    )
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  console.log(S);
  return S
};

module.exports = maxArea;
