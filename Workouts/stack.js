class stack{
    constructor(){
        this.items = [];
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1]; // stack contains the first element at the last position
    }

    print(){
        console.log(this.items);  // .toString() => 11,22,33,44,55  converts the array into string format.
    }

}

const testStack = new stack();
const array = [11,22,33,44,55];
array.map((x) => testStack.push(x));
// testStack.pop()
testStack.print()
console.log(testStack.peek()); // 55
