class Queue{
    constructor(){
        this.items = [];
        this.length = 0;
    }

    enqueue(value){
        this.items[this.length] = value;
        this.length++
    }

    dequeue(){
        if(this.length === 0){
            throw new Error('Stack underflow')
        }
        let removeValue = this.items[0];
        for(let i=1; i<this.length; i++){
            this.items[i-1] = this.items[i];
        }
        this.length--;
        return removeValue;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0]
    }

    isEmpty(){
        return this.length === 0
    }


    getSize(){
        return this.length;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }
        let resultArray = []
        for(let i=0; i<this.length; i++){
        resultArray.push(this.items[i]);
        }
        return resultArray
    }

    // using For-Loop
    reverseQueue(){
        if(this.isEmpty()){
            return null;
        }
        let reverse = []
        for(let i=this.length-1; i>=0; i--){
            reverse.push(this.items[i])
        }
        return reverse
    }

    // Using Swapping
    reverseSwap(){
        let start = 0;
        let end = this.length-1;
        while(start<end){
            let temp = this.items[start];
            this.items[start] = this.items[end];
            this.items[end] = temp;
            start++;
            end--
        }
    }


    removeDup(){
        let uniqueQueue = [];
        let uniqueLength = 0;

        for(let i=0; i<this.length; i++){
            let found = false;
            for(let j=0; j<uniqueLength; j++){
                if(this.items[i] === uniqueQueue[j]){
                    found = true;
                    break;
                }
            }

            if(found !== true){
                uniqueQueue[uniqueLength] = this.items[i];
                uniqueLength++
            }
        }
        this.items = uniqueQueue;
        this.length = uniqueLength;
    }

    countEven(){
        let count = 0;
        for(let i=0; i<this.length; i++){
            if(this.items[i]%2===0){
                count++
            }
        }
        return count;
    }


    countOdd(){
        let count = 0;
        for(let i=0; i<this.length; i++){
            if(this.items[i]%2!==0){
                count++
            }
        }
        return count;
    }


    calculateEvenSum(){
        let sum = 0;
        for(let i=0; i<this.length; i++){
            if(this.items[i]%2==0){
                sum += this.items[i]
            }
        }
        return sum;
    }

    sortQueue(){
        for(let i=0; i<this.length-1; i++){
            for(let j=0; j<this.length-1-i; j++){
                if(this.items[j]>this.items[j+1]){
                    let temp = this.items[j];
                    this.items[j] = this.items[j+1];
                    this.items[j+1] = temp;
                }
            }
        }
    }

    findMax(){
        let max = this.items[0];
        for(let i=1; i<this.length; i++){
            if(max < this.items[i]){
                max = this.items[i]
            }
        }
        return max;
    }
}


const testQueue = new Queue();
testQueue.enqueue(20)
testQueue.enqueue(10)
testQueue.enqueue(20)
testQueue.enqueue(30)
testQueue.enqueue(40)
console.log(testQueue.print())
console.log(testQueue.peek());
console.log(testQueue.countEven());
console.log(testQueue.countOdd());
console.log(testQueue.calculateEvenSum());
console.log(testQueue.findMax());
console.log(testQueue.reverseQueue());

testQueue.removeDup();
console.log("Queue after removing duplicates: " + testQueue.print());

testQueue.sortQueue();
console.log('Sorting queueL '+ testQueue.print());

testQueue.reverseSwap();
console.log('Reverse using Swapping: '+testQueue.print());
