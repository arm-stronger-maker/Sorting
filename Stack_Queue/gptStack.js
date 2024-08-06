class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stackTesting{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    // add an element at the top position.
    add(value){
        let node = new Node(value);
        if(this.top == null){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }

    pop(){
        if(this.top == null){
            throw new Error('RangeError: "Stack underflow", there is no element in the stack')
        }
        const removeNode = this.top;
        this.top = this.top.next;
        this.size--;
        // return removeNode;  // Here, we should give the "removeNode.value". Without .value => it returns    
        /* 
        Node {
              value: 10,
              nextt: null,
              next: Node {
                value: 20,
                nextt: null,
                next: Node { value: 30, nextt: null }
              }
        }    ////LIKE THIS.......
        */           
        return removeNode.value;
    }

    peek(){
        if(this.top == null){
            throw new Error('Stack is Empty: Cannot peek...')
        }
        return this.top.value;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
}


const testStack = new stackTesting()

testStack.add(30)
testStack.add(20)
testStack.add(10)

console.log(testStack.pop());
console.log(testStack.isEmpty());
console.log(testStack.getSize());
console.log(testStack.peek());

