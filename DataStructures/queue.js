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
}