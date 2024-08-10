// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class Stack{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     getSize(){
//         return this.size;
//     }

//     isEmpty(){
//         return this.size === 0 
//     }

//     prepend(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     removeFront(){
//         if(this.isEmpty()){
//             throw new Error('Stack Underflow')
//         }
//         let removeNode
//         if(this.size === 1){
//             removeNode = this.head;
//             this.head = null;
//         } else {
//             removeNode = this.head;
//             this.head = removeNode.next;
//         }
//         this.size--
//     }


//     peek(){
//         if(this.isEmpty()){
//             throw new Error('Stack underflow')
//         }
//         return this.head.value;
//     }

//     print(){
//         let listedValues = ''
//         let curr = this.head;
//         while(curr){
//             listedValues += `${curr.value} `
//             curr = curr.next;
//         }
//         console.log(listedValues);
        
//     }
// }


// const testStack = new Stack()

// testStack.prepend(30)
// testStack.prepend(20)
// testStack.prepend(10)
// testStack.removeFront()
// testStack.print()
// console.log(testStack.peek());





class QueueNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0 
    }

    append(value){
        let node = new QueueNode(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFront(){
        if(this.isEmpty()){
            throw new Error('Stack Underflow')
        }
        let removeNode
        if(this.size === 1){
            removeNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            removeNode = this.head;
            this.head = removeNode.next;
        }
        this.size--
    }


    print(){
        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
        
    }
}


const queueTest = new Queue();
queueTest.append(10)
queueTest.append(20)
queueTest.append(30)
queueTest.removeFront()
queueTest.print()