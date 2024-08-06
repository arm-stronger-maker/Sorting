class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class stackGPT{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    add(value){
        let node = new Node(value);
        if(this.top == null){
            this.top = node;
        }else {
            node.next = this.top;
            this.top = node;
        }
        this.size++
    }

    pop(){
        if(this.top == null){
            throw new Error('Stack Underflow')
        }
        let removeNode = this.top;
        this.top = removeNode.next;
        this.size--
        return removeNode.value;
    }

    peek(){
        if(this.top==null){
            throw new Error('Staack Underflow')
        }
        return this.top.value;
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size;
    }
}


const testStack = new stackGPT()

testStack.add(30)
testStack.add(20)
testStack.add(10)

console.log(testStack.getSize());
console.log(testStack.pop())
console.log(testStack.getSize());
console.log(testStack.peek());
