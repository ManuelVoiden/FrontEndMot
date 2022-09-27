class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    visit() {
        return this.last; // visit from the bottom of the queue and return the element on bottom
    }

    size() {
        return this.length;
    }

    queue() {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const holdingPointer = this.last;
            this.last = newNode;
            this.last.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            const holdingPointer = this.first;
            this.first = this.first.next;
            this.first.next = null;
            this.length--;
            return holdingPointer;
        }
    }
}