const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.queue){
      return this.queue;
    }
  }

  enqueue( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.queue){
      this.currentNode.next = new ListNode(value);
      this.currentNode = this.currentNode.next;

    }
    else{
      this.queue = new ListNode(value);
      this.currentNode = this.queue;
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let firstEl = this.queue.value;
    let nextVal = this.queue.next.value;
    let nextLink = this.queue.next.next;
    this.queue = new ListNode(nextVal);
    this.queue.next = nextLink;
    return firstEl;
  }

}
