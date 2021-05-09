Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function(l1, l2) {
  let mergedList = new ListNode();
  let l3 = mergedList;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          l3.next = l1;
          l1 = l1.next;
      } else {
          l3.next = l2;
          l2 = l2.next;
      }
      l3 = l3.next;
  }

  l3.next = (l1 || l2);

  return mergedList.next;
};
