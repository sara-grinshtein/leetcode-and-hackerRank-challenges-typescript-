// //https://leetcode.com/problems/merge-two-sorted-lists/description/

import { MyListNode, printList } from './structures/MyListNode';

export function mergeTwoLists(list1: MyListNode | null, list2: MyListNode | null): MyListNode | null {
  let dummy:MyListNode | null = new MyListNode(0)
  let tail:MyListNode | null = dummy
  while(list1!==null && list2!==null)
  {
    if(list1.val<=list2.val){
      tail.next = list1
      tail=tail?.next
      list1=list1.next
    }
    else{
      tail.next =list2
      list2=list2.next
      tail=tail?.next

    }
  }
  if(list1==null)
    tail.next =list2
  if(list2==null)
    tail.next =list1
  printList(dummy.next)
  return dummy.next
}