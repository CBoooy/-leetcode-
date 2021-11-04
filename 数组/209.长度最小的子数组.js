/*
 * @Description:
 */
/*
 * @Description:https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 */

/**
 * 思路：滑动窗口
 * left：始终指向当前滑动窗口的初始值，初始值：0，
 * right：始终指向当前滑动窗口的终值，初始值 0，
 * minLength：最小长度,
 * sum:窗口内的总和
 *
 * 边界判断：arr的长度<=0,
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = -1;
  let length = nums.length;
  let result = length + 1;
  let sum = 0;

  while (left < length) {
    if (sum >= target) {
      //move left
      sum -= nums[left];
      left++;

      //为什么left后++，而right要先++
      //因为：要先减去nums[left]后才能移动left的指向
    } else {
      // move right
      right++;

      //设置退出机制，不能让right一直加下去
      if (right < nums.length) {
        sum += nums[right];
      } else {
        break;
      }
    }

    console.log(`left:${left},right:${right},sum:${sum}`);

    if (sum >= target) {
      //如果sum>target，此时才更新result，
      //因为有可能left++之后，sum还是<target此时不满足题目中：
      // 满足其和 ≥ target 的长度最小的连续子数组

      result = Math.min(result, right - left + 1);
    }
  }
  //为什么一定是length+1？
  //result的初始值一定比length大就行了
  if (result !== length + 1) {
    return result;
  } else {
    return 0;
  }
};

let minSubArrayLen2 = function (target, nums) {
  let left = 0,
    right = 0;
  let length = nums.length;
  let result = length+1;
  let sum = 0;

  while (left < length) { 
      sum += nums[right];
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;

    if(right>=length) break
  }

  return result===length+1 ? 0 : result
};

let nums = [ 1, 1,4,4,3];
let target = 8;

console.log(minSubArrayLen2(target, nums));
