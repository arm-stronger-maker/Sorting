class priority{
    constructor(){
       this.array = []
    }

    hashFunction(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    insertValue(value, priority){
        let bunch = {value, priority};
        let added = false;
        for(let i=0; i<this.array.length; i++){
            if(bunch.priority < this.array[i].priority){
                this.array.splice(i, 0, bunch);
                added = true;
                return
            }
        }
        if(!added){
            this.array.push(bunch);
        }
    }

    Peek(){
        if(this.size === 0){
            return null;
        }
        return this.array[0]
    }

    dequeue(){
        this.array.shift()
    }

    print(){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                console.log(i, this.array[i]);
            }
        }
    }
}

const priorityQueue = new priority(7)
priorityQueue.insertValue(10, 4)
priorityQueue.insertValue(20, 1)
priorityQueue.insertValue(30, 6)
priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.print()