class Node{
    constructor(capacity){
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }


    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity;
            this.array[this.rear] = value;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            const item = this.array[this.front];
            this.array[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength -= 1
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1
            }
        }
        return item;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        return this.array[this.front];
    }


    print(){
        if(this.isEmpty()){
            console.log('List iss Empty');
        }
         let i=0;
         let str = ''
         for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
            str += this.array[i] + ' ';
         }
         str += this.array[i]
         console.log(str);
    }
}


const circulartest = new Node(5)
circulartest.enqueue(10)
circulartest.enqueue(20)
circulartest.enqueue(30)
circulartest.enqueue(40)
circulartest.enqueue(50)
circulartest.enqueue(60)
circulartest.print()
console.log(circulartest.peek());
