/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0, undefined);
    let prev = head
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1
            prev = prev.next
            list1 = list1.next
        } else {
            prev.next = list2
            prev = prev.next
            list2 = list2.next
        }
    }

    if (list1) {
        prev.next = list1
    }
    if (list2) {
        prev.next = list2
    }
    return head.next
};