class Queue{
    constructor(){
        this.array = []
    }

    getSize(){
        return this.array.length;
    }

    isEmpty(){
        return this.array.length === 0
    }

    enqueue(value){
        this.array.push(value)
    }

    dequeue(){
        return this.array.shift()
    }

    peek(){
        return this.array[0]
    }

    print(){
        console.log(this.array);
    }

    reverseQueue(){
        return this.array.reverse()
    }

    removeDup(){
        return this.array = [... new Set(this.array)]
    }

    countEven(){
        return this.array.filter((x) => x%2==0).length
    }

    countOdd(){
        return this.array.filter((x) => x%2!==0).length
    }

    calculateEven(){
        return this.array.filter((x) => x%2===0).reduce((sum, curr) => sum+curr, 0)
    }

    sortQueue(){
        return this.array.sort((a,b) => b-a)
    }

    clear(){
        return this.array = []
    }

    
}

const testQueue = new Queue();
testQueue.enqueue(10)
testQueue.enqueue(20)
testQueue.enqueue(30)
testQueue.enqueue(40)
testQueue.enqueue(50)
testQueue.enqueue(50)
testQueue.print()
console.log(testQueue.reverseQueue());
console.log('Peek:', testQueue.peek());
console.log(testQueue.removeDup());
console.log(testQueue.countEven());
console.log(testQueue.countOdd());
console.log(testQueue.calculateEven());
console.log(testQueue.sortQueue());


