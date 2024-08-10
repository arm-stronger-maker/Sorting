
function insertionSort(array){
    for(let i=1; i<array.length; i++){
        let current = array[i];
        let j = i-1;
        while(j>=0 && array[j]>current){
            array[j+1] = array[j];
            j--
        }
        array[j+1] = current;
    }
    return array
}

console.log(insertionSort([7,4,3,2,4,7,9,4,2]));


function selectionSort(array){
        for(let i=0; i<array.length-1; i++){
            let minIndex = i;
            for(let j=i+1; j<array.length; j++){
                if(array[j]<array[minIndex]){
                    minIndex = j
                }
            }
            if(minIndex !== i){
                [array[i], array[minIndex]] = [array[minIndex], array[i]]
            }
        }
        return array
}

console.log(selectionSort([5,3,2,6,8,4,1]));

function quickSort(array){
        if(array.length<2){
            return array;
        }

        let pivot = array[array.length-1];
        let left = [];
        let right = [];

        for(let i=0; i<array.length-1; i++){
            if(array[i]<pivot){
                left.push(array[i])
            } else {
                right.push(array[i])
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([54,78,3242,1323,546,67,34,7]));


function mergeSort(array){
        if(array.length<2){
            return array;
        }

        let middle = Math.floor(array.length/2);
        let left = array.slice(0, middle);
        let right = array.slice(middle)
        return merge(mergeSort(left), mergeSort(right))
}

function merge(a1, a2){
       let sorted = [];
       while(a1.length && a2.length){
          if(a1[0]<a2[0]){
            sorted.push(a1.shift())
          } else {
            sorted.push(a2.shift())
          }
       }
       return [...sorted, ...a1, ...a2]
}

console.log(mergeSort([7,34,12,34,56,3232,56,67,54]));




class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
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
            throw new Error('Stack underflow')
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head =null;
            this.tail =null;
        } else {
            removeValue = this.head;
            this.head  = removeValue.next;
        }
        this.size--
        return removeValue
    }

    removeEnd(){
        if(this.isEmpty()){
            throw new Error('Stack UnderFlow error')
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head = node;
            this.tail = node;
        } else {
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next
            }
            removeValue = this.tail;
            curr.next = null;
            this.tail = curr;
        }
        this.size--
        return removeValue
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


const testLinked = new Linked()
testLinked.prepend(20)
testLinked.prepend(10)
testLinked.append(30)
testLinked.append(40)
testLinked.print()

testLinked.removeFront()
testLinked.removeEnd()
testLinked.print()


class priority{
    constructor(){
        this.items = []
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
    }

    insertValue(value, priority){
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
        if(this.isEmpty()){
            throw new Error('Underflow error')
        }
        return this.items.shift()
    }


    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
                
            }
        }
    }
}


const testPriority = new priority()
testPriority.insertValue(5, 2)
testPriority.insertValue(30, 1)
testPriority.insertValue(55, 9)
testPriority.insertValue(90, 4)


console.log(testPriority.dequeue());




class hash{
    constructor(size){
        this.size = size;
        this.items = new Array(size)
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
          } else {
            let sameitemKey  = bucket.find((item) => item[0] === key);
            if(sameitemKey){
                sameitemKey[1] = value;
            } else {
                bucket.push([key, value])
             }
         }
    }

    getValue(key){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(bucket){
            let sameitemKey = bucket.find((item) => item[0] === key);
            if(sameitemKey){
                return sameitemKey[1]
            }
        }
        return undefined
    }


    removeValue(key){
        let index = this.betterHash(key);
        let bucket = this.items[index]
        if(bucket){
            let sameitemKey = bucket.findIndex((item) => item[0] === key);
            if(sameitemKey !== -1){
                bucket.splice(sameitemKey,1)
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


const testHash = new hash(50)
testHash.insertValue('name','Arjith')
testHash.insertValue('mane','Sarjith')
testHash.removeValue('mane')
testHash.print()


// console.log( testHash.getValue('mane'));



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


let size = 7;
let array = new Array(size).fill(null)
let count = 0;


function hashIndex(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
        total = (total*31 + key.charCodeAt(i)) % size;
    }
    return total;
}


function insert(key){
    if(count/size > 0.7){
        rehash()
    }

    let index = hashIndex(key);
    while(array[index] !== null){
        index = (index+1) % size
    }
    array[index] = key;
    count++
}


function rehash(){
    let oldArray = array;
    size = size*2+1;
    array = new Array(size).fill(null)
    count = 0;

    for(let num of oldArray){
        if(num !== null){
            insert(num)
        }
    }
}


insert('lkfd')
insert('aspojd')
insert('apopjd')
insert('peoj')
insert('poj')
insert('[pqw')
insert('SDF')

console.log(array);




class circular{
    constructor(capacity){
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity;
            this.array[this.rear] = value;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }else {
            console.log('Queue is Full');
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        } else {
            const item = this.array[this.front];
            this.array[this.front] = null;
            this.front = (this.front+1)%this.capacity;
            this.currentLength -= 1;
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1;
            }
            return item
        }
    }


    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.array[this.front]
    }


    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }else {
            let i;
            let listedValues = ''
            for(i=this.front; i!==this.rear; i=(i+1)%this.capacity){
                listedValues += this.array[i] + ' '
            }
            listedValues += this.array[i]
            console.log(listedValues);
        }
    }
}

const testCircular = new circular(5)
testCircular.enqueue(1)
testCircular.enqueue(2)
testCircular.enqueue(3)
testCircular.enqueue(4)
testCircular.enqueue(5)
testCircular.enqueue(6)
testCircular.print()