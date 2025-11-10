/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right || !head) {
        return head;
    }

    const tempPrev = new ListNode(0, head)
    let i = 0, prev = tempPrev
    while (i < left - 1) {
        prev = prev.next
        i++
    }

    let curr = prev.next;

    i = 0
    while (i < right - left) {
        const temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
        i++
    }

    return tempPrev.next
};