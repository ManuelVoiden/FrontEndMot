class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(stack) {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top; // peek from the stack and return the element on top
    }

    lift() {
        return this.bottom; // lift from the bottom of the stack and return the element on bottom
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;  // prevent the node from being destroyed when the garbage collector parse the stack
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {

        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            const holdingPointer = this.top;
            this.top = this.top.next;
            this.top.next=null;
            this.length--;
            return holdingPointer;
        }
    }

    size() {
        return this.length;
    }
}


const myStack = new Stack();
console.log(myStack.push("Google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.push("Platzi"));
console.log(myStack.push("GitHub"));
console.log(myStack.push("Facebook"));
console.log(myStack.push("Instagram"));
console.log(myStack.push("Twitter"));


console.log("At the top of the stack you can find: ", myStack.peek());
console.log("At the bottom of the stack you can find: ", myStack.lift());
console.log("The current size of the stack is: ", myStack.size(), "elements");
console.log(myStack.pop());
console.log("The current size of the stack is: ", myStack.size(), "elements")
console.log("At the top of the stack you can find: ", myStack.peek());
