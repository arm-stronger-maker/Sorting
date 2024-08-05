/*

A Deque (Double-Ended Queue) is a type of queue in which insertion and
deletion of elements can be performed from both ends (front and rear).

*/


class Deque{
    constructor(){
        this.items = []
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
    }

    // add an element to start
    addFront(value){
        this.items.unshift(value)
    }

    // add an element to end
    addTail(value){
        this.items.push(value)
    }

    // Remove first element
    removeFront(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, Cannot remove an element from empty deque.')
        }
        return this.items.shift()
    }

    // Remove last element
    removeTail(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, means, there is no element in deque. Deque is empty')
        }
        return this.items.pop()
    }

     // Return the front element without removing it
     returnFirst(){
        if (this.isEmpty()) {
            throw new Error("Deque is empty: Cannot get the front element");
        }
        return this.items[0]
     }

     returnEnd(){
        if(this.isEmpty()){
            throw new Error('Deque is empty, cannot get element')
        }
        return this.items[this.items.length-1]
     }
}


const deque = new Deque()

deque.addFront(3)
deque.addFront(2)
deque.addFront(1)

//..............
