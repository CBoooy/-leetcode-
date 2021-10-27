/*
 * @Description: https://leetcode-cn.com/problems/merge-sorted-array/
 */


/***
 * 像这种合并有两种，
 *  1 arr1 + arr2 => arr3
 *  2 arr1 + arr2 => arr1
 * 
 *  这里是第二种情况。
 * 
 * 限制：非降序，arr1中剩下的都是0，0的长度等于arr2的长度。
 * 
 * 思路：这个和75颜色分类一个道理：颜色分类是用move指针（动）和固定的几个数（静）比较后，移动数的位置。
 * 
 *      这个是两个数组的末尾（都动）进行比较，然后移动数据。
 * 
 * 但其本质都是，指针之间的比较，然后移动数据的位置。
 * 
 * 需要注意的是指针的初始位置，和取值范围：
 * 
 *  top:始终指向nums1的非零数据的最后一位，从尾向0遍历，范围：[m-n-1,0]
 *  dowm:始终指向nums2的非零数据的最后一位，从尾向0遍历，范围：[n-1,0]
 * 
 *   
 * 
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // m，n是元素个数，不是length ·
  let top = m - 1,
    down = n - 1;
  let last = m + n - 1; 
  while (top>=0 || down >=0) {
    //升序，大的那个往右走
    if (top === -1) {
      // 说明nums1走完了，接下来只需要把所有nums2的放入nums1就好
      nums1[last] = nums2[down]
      down--
    } else if (down === -1) {
      nums1[last] = nums1[top]
      top--
    }else if (nums1[top] > nums2[down]) {
      nums1[last] = nums1[top];
      //处理了nums1，那nums1的指针top要向前移动
      top--; 
    } else {
      nums1[last] = nums2[down];
      down--; 
    }
    //由于last指向nums1的最后一位，
    //无论谁移动，最后last都要向前移动一位 
    last--;
  }
 
};
 
 
 
module.exports = merge
