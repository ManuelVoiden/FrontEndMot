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

    queue(value) {
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
            this.length--;
            return holdingPointer;
        }
    }
}

const myQueue = new queue();

console.log(myQueue.queue("Maria"));
console.log(myQueue.queue("Juan"));
console.log(myQueue.queue("Jorge"));
console.log(myQueue.queue("Javier"));
console.log(myQueue.queue("Carlos"));
console.log(myQueue.queue("Jose"));

console.log("the length of the queue is ", + myQueue.size(), "persons in the queue");
console.log(myQueue.dequeue(), "the first person in the queue get serviced");
console.log("the length of the queue is ", + myQueue.size(),"persons in the queue");

console.log("the first person on the queue is ", + myQueue.peek(), "the first person on the queue");
console.log("the last person on the queue is ", + myQueue.visit(), "the last person on the queue");