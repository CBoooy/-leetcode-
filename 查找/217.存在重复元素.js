/*
 * @Description:https://leetcode-cn.com/problems/contains-duplicate/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   let set = new Set()
//   for (let item of nums) {
//     if (set.has(item)) {
//       return true
//     } else {
//       set.add(item)
//     }
//   }

//   return false
// };

let containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
}

let arr = [1, 2, 3,1];
console.log(containsDuplicate(arr));
