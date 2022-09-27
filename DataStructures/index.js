//An array class using a constructor method
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //Pop method for an array
    pop() {
        const lastItem = this.data[this.length - 1]; //Select the last item in the array and puts in a const
        delete this.data[this.length - 1];  //Remove the last item from the array
        this.length--; //Reset the length counter, sustracting 1
        return lastItem; //Return the last item in the array just eliminated
    }

    //Add a new item to the start of the array
    shift_index_Up() {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
    }

    unshift(item) {
        this.shift_index_Up();
        this.data[0] = item;
        this.length++;
        return this.data;
    }

    shift_index_Down() {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    shift() {
        const firstItem = this.data[0];
        this.shift_index_Down();
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }


    dynamic_shift_up(index) {
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
    }

    dynamic_unshift(item, index) {
        this.dynamic_shift_up(index);
        this.data[index] = item;
        this.length--;
        return this.data;
    }

    dynamic_shift_down(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    dynamic_shift(item, index) {
        const added_item = this.data[index];
        this.dynamic_shift_down(index);
        delete this.data[this.length - 1];
        this.length--;
        return added_item;
    }

}

const myArray = new MyArray();

myArray.push("Juan");
myArray.push("John");
myArray.push("Jorge");
myArray.push("Javier");
myArray.push("Carlos");

console.log(myArray);

myArray.unshift("Juli");
console.log(myArray);


myArray.shift();
console.log(myArray);

myArray.dynamic_shift("Jorge", 2);
console.log(myArray);

myArray.dynamic_unshift("Juli", 2);
console.log(myArray);