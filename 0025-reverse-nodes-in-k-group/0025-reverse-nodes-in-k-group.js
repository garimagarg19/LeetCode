/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {
        let kth = getKthNode(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        // Reverse the group
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
}

function getKthNode(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}