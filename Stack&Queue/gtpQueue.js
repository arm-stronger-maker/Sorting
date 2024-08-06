// Easy implementation of Queue DateStructure.

class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length;
    }

    // Add an element to the end of the queue. Enqueue used for addition an element [Insert]
    enqueue(value){
        this.items.push(value)
    }

    // Remove the first element from the queue.
    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue Underflow, Cannot remove an element from the empty queue.')
        }
        return this.items.shift()  // shift method removes the first element from the array. unshift() method adds elements at the starting position of the array 
    }

    frontElement(){  // Also called peek()
        if(this.isEmpty()){
            throw new Error('Queue is empty')
        }
        return this.items[0]
    }
}


const queueTest = new Queue()

queueTest.enqueue(10)
queueTest.enqueue(20)
queueTest.enqueue(30)


console.log(queueTest.dequeue());
console.log(queueTest.getSize());
console.log(queueTest.isEmpty());
console.log(queueTest.frontElement());


