class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length;
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Underrflow error')
        }
        return this.items.shift();
    }

    frontElement(){
        if(this.isEmpty()){
            throw new Error('Queue is empty')
        }
        return this.items[0];
    }
}


const queueGPT = new Queue();

queueGPT.enqueue(10)
queueGPT.enqueue(20)
queueGPT.enqueue(30)
queueGPT.enqueue(40)

console.log(queueGPT.dequeue());
console.log(queueGPT.getSize());
console.log(queueGPT.frontElement());
