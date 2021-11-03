/*
 * @Description:https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

/**
 * 1 暴力for两层
 * 2 使用set数据结构
 * 3 将length小的arr1存入obj1，用arr2中的和obj1中的比较，如果存在，则存入arr2
 *
 * 如果数组是有序的：
 *
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  set1.forEach((v) => {
    if (set2.has(v)) {
      result.push(v);
    }
  });
  return result;
};

module.exports = intersection;
