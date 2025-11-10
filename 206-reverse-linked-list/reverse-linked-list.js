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
var reverseList = function(head) {
    const tempPrev = new ListNode(0, head);
    let prev = tempPrev
    let curr = head
    while (curr?.next) {
        const temp = curr.next
        curr.next = temp.next
        temp.next = prev.next
        prev.next = temp
    }
    return tempPrev.next
};