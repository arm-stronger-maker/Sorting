// Circular queue
class circular{
    constructor(capacity){
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.currentLength = 0;
        this.front = -1
        this.rear = -1       
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)% this.capacity;
            this.array[this.rear] = value;
            this.currentLength += 1
            if(this.front === -1){
                this.front = this.rear;
            }
        }else {
            console.log('Queue is full');
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }else {
            const item = this.array[this.front];
            this.array[this.front] = null
            this.front = (this.front+1)%this.capacity;
            this.currentLength -= 1;
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1
            }
            return item;
        }
       
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.array[this.front];
    }


    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }else {
            let listedValues = ''
            let i;
            for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
                listedValues += this.array[i] + ' '
            }
            listedValues += this.array[i];
            console.log(listedValues);
        }
    }
}


const cirPra = new circular(5);
cirPra.enqueue(10)
cirPra.enqueue(20)
cirPra.enqueue(30)
cirPra.enqueue(40)
cirPra.enqueue(50)
cirPra.dequeue()
cirPra.print()
console.log(cirPra.peek());


function insertionSort(array){
        for(let i=1; i<array.length; i++){
            let current = array[i]
            let j= i-1;
            while(j>=0 && array[j]>current){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array;
  }
console.log(insertionSort([8,5,3,2,5,7,9,2]));


function selectionSort(array){
    for(let i=0; i<array.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array;
}
console.log(selectionSort([8,5,4,3,2,2,4,6,7]));


function qucikSort(array){  
        if(array.length<2){
            return array;
        }

        let pivot = array[array.length-1];
        let left = [];
        let rigth = [];

        for(let i=0; i<array.length-1; i++){
            if(array[i]<pivot){
                left.push(array[i])
            }else{
                rigth.push(array[i])
            }
        }
        return [...qucikSort(left), pivot, ...qucikSort(rigth)]

}
console.log(qucikSort([7,5,4,2,1,3,4,6,6]));


function mergeSort(array){
        if(array.length<2){
            return array;
        }
        let middle = Math.floor(array.length/2);
        let left = array.slice(0, middle);
        let rigth = array.slice(middle);
        return merge(mergeSort(left), mergeSort(rigth))
}


function merge(a1, a2){
    let sorted = [];
    while(a1.length && a2.length){
        if(a1[0]<a2[0]){
            sorted.push(a1.shift())
        }else{
            sorted.push(a2.shift())
        }
    }
    return [...sorted, ...a1,...a2]
}

console.log(mergeSort([8,6,5,34,2,1,4,6,7]));


class hashTable{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    betterHash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insertValue(key, value){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(!bucket){
            this.items[index] = [[key, value]]
        }else{
            let sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value])
            }
        }
    }

    getValue(key){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyItem = bucket.find((item) => item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    Deletion(key){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyItem = bucket.findIndex((item) => item[0]===key);
            if(sameKeyItem !== -1){
                bucket.splice(sameKeyItem, 1)
            }
        }
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const hashTest = new hashTable(50);
hashTest.insertValue('age', 21);
hashTest.insertValue('aeg', 22);
hashTest.insertValue('ega', 23);
hashTest.Deletion('ega')
hashTest.print()

console.log(hashTest.getValue('age')); //21


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
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
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
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFront(){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(this.size===1){
            removeValue =this.head;
            this.head = null;
            this.tail = null;
        }else{
            removeValue = this.head;
            this.head = removeValue.next;
        }
        this.size--
        return removeValue;
    }

    removeEnd(){
        if(this.isEmpty()){
            return null;
        }
        let removeValue;
        if(this.size===1){
            removeValue =this.head;
            this.head = null;
            this.tail = null;
        }else{
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
        }else{
            let listedValues = ''
            let curr = this.head;
            while(curr){
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listedValues);
        }
    }
}


const testLinked = new linked()
testLinked.prepend(20)
testLinked.prepend(10)
testLinked.append(30)
testLinked.append(40)
testLinked.append(50)
testLinked.removeFront()
testLinked.removeEnd()
testLinked.print()


class priority{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0;
    }

    insertValue(value,priority){
        let bunch = {value, priority};
        let added = false;

        for(let i=0; i<this.items.length; i++){
            if(bunch.priority<this.items[i].priority){
                this.items.splice(i, 0, bunch)
                added = true;
                return;
            }
        }
        if(!added){
            this.items.push(bunch)
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Empty queue')
        }
        return this.items.shift()
    }

    frontElement(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        return this.items[0]
    }

}
const priorityQueue = new priority();
priorityQueue.insertValue(5,2)
priorityQueue.insertValue(10,1)
priorityQueue.insertValue(15,4)
priorityQueue.insertValue(20,7)
priorityQueue.dequeue()
console.log(priorityQueue.frontElement());





let size = 7;
let array = new Array(size).fill(null);
let count = 0;


function hashGenarator(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
        total = (total*31 + key.charCodeAt(i)) % size; 
    }
    return total;
}

function insertValue(key){
    if(count/size > 0.7){
        rehash()
    }
    let index = hashGenarator(key);
    if(array[index] !== null){
        index = (index+1)%size;
    }
    array[index]  = key;
    count++
}

function rehash(){
    let oldArray = array;
    size = size * 2 + 1;
    array = new Array(size).fill(null);
    count = 0;
    for(let num of oldArray){
        if(num !== null){
            insertValue(num)
        }
    }
}

insertValue('aa')
insertValue('ss')
insertValue('dd')
insertValue('ff')
insertValue('gg')
insertValue('hh')
insertValue('jj')

console.log(array);


