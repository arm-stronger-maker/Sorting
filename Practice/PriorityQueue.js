class priorityQueue{
    constructor(){
        this.array = []
    }

    getSize(){
        return this.array.length;
    }

    isEmpty(){
        return this.array.length === 0
    }

    addValue(value, priority){
        let bunch = {value, priority}
        let added = false;

        for(let i=0; i<this.array.length; i++){
            if(bunch.priority < this.array[i].priority){
                this.array.splice(i, 0, bunch);
                added = true;
                break;
            }
        }

        if(!added){
            this.array.push(bunch)
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Uunderflow error')
        }
        return this.array.shift()
    }

    frontElement(){
        if(this.isEmpty()){
            throw new Error('Underflow  error')
        }
        return this.array[0]
    }
}

const priority = new priorityQueue()

priority.addValue(10,3)
priority.addValue(30,5)
priority.addValue(70,2)

// console.log(priority.dequeue());
console.log(priority.frontElement());


