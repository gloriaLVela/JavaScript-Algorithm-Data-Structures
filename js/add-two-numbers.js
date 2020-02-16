/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addNode(head, data){
// A newNode object is created with property data and next=null

    let newNode = new ListNode(data);
// When head = null i.e. the list is empty, then head itself will point to the newNode.
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
// Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
    let tail = this.head;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}

var addTwoNumbers = function(l1, l2) {
    let num1 = 0;
    let num2 = 0;
    let res = 0;
    let head = null;
    let rem = 0;
    while (l1 != null && l2 != null){
        res = l1.val + l2.val;
        res += rem;
        rem = 0;
        if (res > 9){
            rem = res;
            res = res % 10;
            rem = rem/10;
        }
        l1 = l1.next;
        l2 = l2.next;
        head = addNode(head, res);

    }

//     while (l1 != null){
//         res = l1.val;
//         res += rem;
//         rem = 0;
//         if (res > 9){
//             rem = res;
//             res = res % 10;
//             rem = rem/10;
//         }
//         l1 = l1.next;
//         head = addNode(head, res);

//         }

//     while (l2 != null){
//         res = l2.val;
//         res += rem;
//         rem = 0;
//         if (res > 9){
//             rem = res;
//             res = res % 10;
//             rem = rem/10;
//         }
//         l2 = l2.next;
//         head = addNode(head, res);

//         }
    return head;
};