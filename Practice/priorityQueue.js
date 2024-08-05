class priorityQueue{
    constructor(){
        this.items = []
    }


    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
    }

    // adding elements based on its priority value. 
    add(value, priority){
        const getValues = {value, priority}
        let added = false;

        for(let i=0; i<this.items.length; i++){
            if(getValues.priority<this.items[i].priority){
                this.items.splice(i, 0, getValues);
                added = true;
                break;
            }
        }

        if(!added){
            this.items.push(getValues)
        }
    }
    
    /* Remove an element with have highest priority value;
     In a standard priority queue:
     Lower numerical values usually indicate higher priority.
     The element with the highest priority (lowest numerical value) should be dequeued first.*/

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Queue underflow, queue is empty')
        }
        return this.items.shift().value;
    }

    frontElement(){
        if(this.isEmpty()){
            throw new Error('Queue is Empty, It leads to Underflow error')
        }
        return this.items[0].value;
    }

}

const priority = new priorityQueue()

priority.add(50, 2)
priority.add(20, 1)
priority.add(40, 7)

console.log(priority.dequeue());
console.log(priority.frontElement());
console.log(priority.isEmpty());
console.log(priority.getSize());


/*

let a = 10
let b = 20;

let c = {a, b}

console.log(c.b);

*/