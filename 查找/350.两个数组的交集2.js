/*
 * @Description:https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */
/**
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 *
 * let obj1 ,属性名是arr的值，值是arr的值出现的次数。
 *
 * for（arr2)的时候，判断：
 *
 * obj1中无属性名：跳过
 * obj1中有属性名，加入result，且值--
 */

const intersection = require('./349.两个数组的交集');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  //使用了map
  let store = new Map();
  let result = [];
  for (let item of nums1) {
    if (store.has(item)) {
      let value = store.get(item) + 1;

      store.set(item, value);
    } else {
      store.set(item, 1);
    }
  }

  for (let item of nums2) {
    if (store.has(item)) {
      result.push(item);
      let value = store.get(item) - 1;
      if (value === 0) {
        store.delete(item);
      } else {
        store.set(item, value);
      }
    }
  }

  return result;
};

let intersect2 = function (arr1, arr2) {
  /**
   * 排序+双指针,
   * 对栈顶进行比较，谁小谁出栈，如果相同，存入，同时出栈
   */

  // arr1.sort();
  // arr2.sort();
  //以上这种排序算法，最后得出的结果： 0, 15, 16,  2,  2, 25

  //要这样写：
  arr1.sort((a, b) => {
    return a-b
  })
  arr2.sort((a, b) => {
    return a-b
  }) 
  let a1 = 0,
    a2 = 0;
  let result = [];
  while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
      a1++;
    } else if (arr1[a1] > arr2[a2]) {
      a2++;
    } else {
      result.push(arr1[a1]);
      a1++;
      a2++;
    }
  } 
  return result;
};

let arr1 = [
  61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86,
  58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34,
  62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
  65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55,
  66, 82, 0, 79, 11, 81,
];
let arr2 = [
  5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84,
  38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
];
intersect2(arr1, arr2);
