/*
 * @Description:https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //将数和下标存入map
  let map = new Map()

  nums.forEach((value,index) => {
    map.set(value,index)
  }) 

  console.log(map);
  
  for (let [index,value] of nums.entries()) {
    let target2 = target - value
    
    //什么情况同一个元素会在答案里重复出现？
    //遍历nums时的下标，和map.get()出来的一样的时候（因为这个通过值找出下标）
    if (map.get(target2) && map.get(target2)!==index) {
      return [index, map.get(target2)];
    }
  }

  return []
};

let arr = [1,3,4,2];
let target = 6

console.log(twoSum(arr,target));
