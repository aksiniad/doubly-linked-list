const Node = require('./node');

class LinkedList {
    constructor() {
    this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
     var temp = new Node(data);
         if (this.length>0) {
            temp.prev = this._tail;
            this._tail.next = temp;
            this._tail = temp;
        } else {
            this._tail = temp;
            this._head = this._tail;
            }
 
         this.length++;
         return temp;
    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}
list = new LinkedList();
module.exports = LinkedList;
