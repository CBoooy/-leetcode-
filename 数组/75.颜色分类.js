/*
 * @Description:https://leetcode-cn.com/problems/sort-colors/
 */

/***
 * 限制：初始数组未排序，原地。
 *
 * 思考：如果是普通的排序，直接arr.sort()。但这里讲的是，特殊的顺序分类。
 *
 * 思路：三路快排。（也就是使用多个指针）
 * 由于数组的下标在变，因此，不能用for，而用while
 *
 * 顺序：红白蓝，0，1，2
 * 循环不变量：
 *  red：指向0子序列的末尾。初始值：-1
 *  white：作为遍历指针，同时也指向1子序列的+1位置。初始值：0，范围：当white = blue就结束。
 *  blue：指向2的头：初始值：arr.length
 *
 *  在white遍历的过程中：
 *    1 遇到0 ，将red+1和white交换。然后red+1。这样就保证了red始终指向0子序列的末尾。
 *    2 遇到1，跳过，遍历下一个
 *    3 遇到2，将blue-1和white交换，然后blue-1。这样就保证了
 *
 *    在这个过程中，始终关注white的位置
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = -1,
    white = 0,
    blue = nums.length;

  let swap = function (a, b) {
    let temp = null;
    temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };
  while (white < blue) { 
    if (nums[white] === 0) {
      
      swap(white, red + 1);
      red++;
      white++; 
    }else if (nums[white] === 1) {
      white++; 
    }else {
      blue = blue - 1;
      swap(white, blue); 
    } 
  }
};

module.exports = sortColors;
