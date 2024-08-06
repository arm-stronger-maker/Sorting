class Deque{
    constructor(){
        this.items = [];
    }
    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
    }

    addFront(value){
        this.items.unshift(value);
    }

    addEnd(value){
        this.items.push(value);
    }

    removeFront(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, means, there is no element in deque. Deque is empty')
        }
        return this.items.shift();
    }

    removeEnd(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, means, there is no element in deque. Deque is empty')
        }
        return this.items.pop()
    }

    returnFirst(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, means, there is no element in deque. Deque is empty')
        }
        return this.items[0];
    }

    returnEnd(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, means, there is no element in deque. Deque is empty')
        }
         return this.items[this.items.length-1]
    }
}

const deque = new Deque()

deque.addFront(30)
deque.addFront(20)
deque.addFront(10)


console.log(deque.removeFront());
