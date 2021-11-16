/*
 * @Description:https://leetcode-cn.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) { 

  let pre = null, cur = head;
  let next;
  //let next = head.next;直接这样写是危险的，因为如果只有1个节点，那么这个next可能不存在。
  //因此，只声明，不赋值，在while中才赋值，因为进入循环体的条件是cur.next存在，而cur.next就是next指针
  while (cur) {
    next = cur.next

    cur.next = pre
    pre = cur
    cur = next 
    
  }

  return pre

};
