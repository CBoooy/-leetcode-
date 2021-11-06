/*
 * @Description:https://leetcode-cn.com/problems/minimum-window-substring/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let store = {};
  let left = 0,
    right = -1;
  let result = [s.length + 1, ''];

  for (let item in t) {
    if (store[t[item]]) {
      store[t[item]]++;
    } else {
      store[t[item]] = 1;
    }
  } 
  while (right < s.length) {
    //一个循环里干的：将right向前移动，直到形成一个满足target的窗口。
    //将left向前移动刚好破坏这个窗口

    while (!isSatisfied() && right < s.length) {
      //继续移动右指针,如果遇到target就store--
      right++;
      if (s[right] in store) {
        store[s[right]]--;
      }
    }
    //上面个while执行完毕，就说明窗口满足条件了，且right指向了正确的target

    //下面这个while要做的：更新result，并让left破坏窗口
    /***
     * 在这之中， 有可能会出现这几种情况：
     * a1b2c3
     * a111bbb2c3
     *
     * 要让left指向最后一个1，
     * 因此，什么情况下left指针会向右移动呢？
     * [left,right]这个区间仍然满足窗口，就移动，
     * 在移动的过程中，会遇到两种情况：
     * 1 left指向的是target，这时候就更新result，更新store，left++
     * 2 left指向的不是target，这时候就普通的left++
     */

    while (isSatisfied()) {
      if (s[left] in store) {
        // 此时left指向target
        //更新result
        if (right - left + 1 < result[0]) {
          result = [right - left + 1, s.slice(left, right + 1)];
        }

        //更新store
        store[s[left]]++;
      }
      left++;
    }

    // 执行到这儿,left指向窗口的左边，a111bbb2c3,也就是这里最右边的那个b，
    // right指向窗口的右边，也就是3，两者同时指向target，
    // 但这时候窗口已经被破坏了

    // 不需要重置store，还是沿用的上一次的store，因为里面保存着当前破坏了的窗口的target数量
    // store = storeect.assign(store);
  }

  function isSatisfied() {
    //判断是否收集齐了的条件是？

    // 最开始，store里面是窗口中应该包含的值，和其个数
    //右指针移动后，每收集一个target，store就会减少（表示还需要收集多少），当全部减少<=0，就表示还需要收集0个，即全部收集齐了
    //左指针移动后，每遇到一个target就会增加，当其中有一个store>0,就表示还需要再收集一个

    for (let item in store) {
      if (store[item] > 0) {
        return false;
      }
    }
    return true;
  }
  
  return result[1];
};

let str = 'ada';
let target = 'aa';
console.log(minWindow(str, target));
