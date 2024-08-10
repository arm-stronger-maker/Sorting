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


class hash{
    constructor(size){
        this.size = size;
        this.items = new Array(size);
    }

    hashIndex(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
    }

    insert(key, value){
        let index = this.hashIndex(key);
        this.items[index] = value
    }

    get(key){
        let index = this.hashIndex(key);
        return this.items[index]
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const normalHash = new hash(50)
normalHash.insert('name', 'Anu')
normalHash.insert('age', '25')
normalHash.insert('age', '26')  // collision
normalHash.insert('city', 'Salem')

normalHash.print()


class withOutCollision{
    constructor(size){
        this.size = size;
        this.items = new Array(size);
    }

    betterHash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total = (total +key.charCodeAt(i)) % this.size; 
        }
        return total;
    }


    insert(key, value){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(!bucket){
            this.items[index] = [key, value];
        } else {
            let sameitemKey = bucket.find((item)=>item[0] === key);
            if(sameitemKey){
                sameitemKey[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key){
        let index = this.betterHash(key);
        let bucket = this.items[index];
        if(bucket){
            let sameitemKey = bucket.find((item) => item[0] === key);
            if(sameitemKey){
                return sameitemKey[1]
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.betterHash(key);
        let bucket = this.items[index];

        if(bucket){
            let sameitemKey = bucket.find((item) => item[0] === key);
            if(sameitemKey){
                bucket.splice(sameitemKey,1);
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

const betterHaash = new withOutCollision(7)

betterHaash.insert('name', 'jin')
betterHaash.insert('mane', 'Sri')
betterHaash.insert('naem', 'Hindi')
betterHaash.insert('naem', 'Japanese')

betterHaash.print()



let size = 7;
let array = new Array(size).fill(null);
let count = 0;

function hashIndex(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash = (hash * 31 + key.charCodeAt(i)) % size;
    }
    return hash;
}


function insertKey(key){
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
    size = size * 2 + 1;
    array = new Array(size).fill(null);
    count = 0;

    for(let num of oldArray){
        if(num !== null){
            insertKey(num)
        }
    }
}

insertKey('asd')
insertKey('gf')
insertKey('qwwr')
insertKey('skdkdhsdkl')
insertKey('duh')
insertKey('sdkdufgsi')
console.log(array);


function insertionSort(array){
    for(let i=1; i<array.length; i++){
        let current = array[i];
        let j= i-1;
        while(j>=0 && array[j]>current){ // insertion goes down to while
            array[j+1] = array[j];
            j--
        }
        array[j+1] = current
    }
    return array
}


console.log(insertionSort([3,5,6,8,9,1,2,4]));


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

console.log(selectionSort([6,7,8,1,2,3]));

function quickSort(array){
    if(array.length<2){
        return array;
    }
    let pivot = array.length-1
    let left = []
    let right = []

    for(i=0; i<array.length-1; i++){
            if(array[i]<pivot){
                left.push(array[i])
            } else {
                right.push(array[i])
            }
    }

    return [...left, pivot, ...right]
}

console.log(quickSort([34,56,787,989,12,32]));


function mergeSort(array){
    if(array.length<2){
        return array;
    }

    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(a1, a2){
    let sorted = []
    while(a1.length && a2.length){
        if(a1[0] < a2[0]){
            sorted.push(a1.shift())
        } else {
            sorted.push(a2.shift())
        }
    }
    return [...sorted, ...a1,...a2]
}

console.log(mergeSort([3,5,7,2,3,6,88]));