/*
 * @Description:https://leetcode-cn.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let length = nums.length;
  let left, right;
  let result = []; 

  if (length < 3) return result
  
  nums.sort((a, b) => {
    return a-b
  })

  console.log(`nums:${nums}`);

  for (let [index, item] of nums.entries()) {
    //当前的必须是负数，然后用大的来将就小的

    if (item > 0) return result

    //做外循环去重，[-4,-4,-2,-2,1,1,2,2,3,3]
    //即已经求过一次-4了，下一次出现-4，就不再求一遍了，直接从-2开始求
    if(item === nums[index - 1]) continue
    left = index + 1
    right = length - 1
    while (left < right) {
      let sum = item + nums[left] + nums[right]
      if (sum === 0) {
        result.push([item, nums[left], nums[right]]);

        //做内循环去重[-4,-4,-2,-2,1,1,2,2,3,3]
        //即：此时item = -4 ， left指向第一个1，right指向倒数第一个3
        //那么，下一次内循环，left不能指向1了，要指向非1的。right不能指向3了，要指向非3
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        // 这个循环结束时，left指向最后一个1，或者left超过了right，

        while (left < right && nums[right + 1] === nums[right]) {
          right++;
        }
        // 这个循环结束是，right指向最后一个3，或者right超过了left
        left++;
        right--;
      } else if (sum > 0) {
        //移动right，使sum变小
        right--
      } else {
        left++
      }
      
    }
  }

  return result

};
