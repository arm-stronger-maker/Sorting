class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linked{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFront(){
        if(this.isEmpty()){
            throw new Error('Error in underflow')
        }
        let removeValue;
        if(this.size === 1) {
            removeValue  = this.head;
            this.head = null;
            this.tail = null;
        }
         else {
            removeValue = this.head;
            this.head = removeValue.next;
         }
         this.size--
         return removeValue;
    }

    removeEnd(){
        if(this.isEmpty()){
            throw new Error('Underflow error')
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            removeValue = this.tail;
            curr.next = null;
            this.tail = curr;
        }
        this.size--
        return removeValue;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }

        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listedValues);
        
    }
}


const testLinked = new linked()

testLinked.prepend(30)
testLinked.prepend(20)
testLinked.prepend(10)
testLinked.append(40)
testLinked.append(50)
testLinked.print()

testLinked.removeFront()
testLinked.removeEnd()
testLinked.print()

class priority{
    constructor(){
        this.items = []
    }

    getSize(){
        return this.array.length;
    }

    isEmpty(){
        return this.array.length === 0
    }

    insert(value, priority){
        let bunch = {value, priority};
        let added = false;

        for(let i=0; i<this.items.length; i++){
            if(bunch.priority < this.items[i].priority){
                this.items.splice(i, 0, bunch);
                added = true;
                return;
            }
        }
        if(!added){
            this.items.push(bunch)
        }
    }

    dequeue(){
        return this.items.shift()
    }

    returnFront(){
        return this.items[0]
    }
}


const priorityQueue = new priority()

priorityQueue.insert(22,54)
priorityQueue.insert(62,24)
priorityQueue.insert(12,984)


console.log(priorityQueue.dequeue());


function middleRemover(array){
    let middle = Math.floor(array.length/2);
    let result = []
        for(let i=0; i<array.length; i++){
            if(array[i] !== array[middle]){
                result.push(array[i])
            }
        }
    return result;
}

// console.log(middleRemover([1,2,3,4,5]));

// proper middle remover.
function middleRemover2(array){
let len = array.length;
if(len === 0){
    return array
}
let middle = Math.floor(len/2);
if(len%2 === 0){
    array.splice(middle-1, 2)
} else {
    array.splice(middle,1)
}
return array
}

console.log(middleRemover2([1,2,3,4,6]));




