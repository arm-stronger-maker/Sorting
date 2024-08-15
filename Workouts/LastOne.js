// Circular queue
class circular{
    constructor(capacity){
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.currentLength = 0;
        this.head = -1;
        this.rear = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity;
            this.items[this.rear] = value;
            this.currentLength++;
            if(this.head == -1){
                this.head = this.rear;
            }
        }
    }


    dequeue(){
        if(!this.isEmpty()){
            const item = this.items[this.head];
            this.head = (this.head+1)%this.capacity;
            this.currentLength--;
            if(this.isEmpty()){
                this.head = -1;
                this.rear = -1;
            }
        }
    }


    peek(){
        if(!this.isEmpty()){
            return this.items[this.head];
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }
        let i=0;
        let listedValues = ''
        for(i=this.head; i!==this.rear; i=(i+1)%this.capacity){
            listedValues += this.items[i] + ' '
        }
        listedValues += this.items[i];
        console.log(listedValues);
    }
}


const testCircular = new circular(5);
testCircular.enqueue(10)
testCircular.enqueue(20)
testCircular.enqueue(30)
testCircular.enqueue(40)
testCircular.enqueue(50)
testCircular.dequeue()
testCircular.print()
console.log((testCircular.peek()));


// Hash table implementation
class Hash{
    constructor(size){
        this.array = new Array(size);
        this.size = size;
    }

    hashFunction(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insertValue(key, value){
        let index = this.hashFunction(key);
        let bucket = this.array[index];
        if(!bucket){
            this.array[index] = [[key, value]];
        }else{
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value])
            }
        }
    }


    getValue(key){
        let index = this.hashFunction(key);
        let bucket = this.array[index];
        if(bucket){
            let sameKeyItem = bucket.find((item)=> item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    removeValue(key){
        let index = this.hashFunction(key);
        let bucket = this.array[index];
        if(bucket){
            let sameKeyItem = bucket.findIndex((item) => item[0] === key);
            if(sameKeyItem !== -1){
                bucket.splice(sameKeyItem, 1)
            }
        }
    }

    print(){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                console.log(i, this.array[i]);
            }
        }
    }
}


const testHash = new Hash(50);
testHash.insertValue('name', 'Raj');
testHash.insertValue('amen', 'Sri');
testHash.insertValue('mena', 'Prajith');
testHash.insertValue('eman', 'Prem');
testHash.removeValue('amen');
testHash.print()


class LinearProbe{
    constructor(size){
        this.array = new Array(size).fill(null);
        this.size = size;
    }

    hashFnc(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
        hash = (hash + key.charCodeAt(i)) % this.size;
       }
        return hash;
    }

    insert(key){
        let index = this.hashFnc(key);
        let startIndex = index;
        while(this.array[index] !== null){
            index = (index+1) % this.size;
            if(startIndex === index){
                console.log('Table gets full');
                return;
            }
        }
        this.array[index] = key;
    }
}

const linearTest = new LinearProbe(7);
linearTest.insert('E')
linearTest.insert('X')
linearTest.insert('P')
linearTest.insert('O')
linearTest.insert('S')
linearTest.insert('E')
linearTest.insert('Y')
linearTest.insert('O')
console.log(linearTest.array)


class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class Linked{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
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
        }else{
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
            this.head = null;
            this.tail = null;
        }else{
            removeValue = this.head;
            this.head = removeValue.next
        }
        this.size--
        return removeValue
    }

    removeEnd(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
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
        return removeValue
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }
        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
    }
}

const testLinked = new Linked();
testLinked.prepend(30)
testLinked.prepend(20)
testLinked.prepend(10)
testLinked.append(40)
testLinked.append(50);
testLinked.removeFront()
testLinked.removeEnd()
testLinked.print()


class priorityQueue{
    constructor(){
        this.items = []
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
            this.items.push(bunch);
        }
    }

    dequeue(){
        return this.items.shift();
    }

    returnValue(){
        return this.items[0]
    }
}

const testPrior = new priorityQueue();
testPrior.insertValue(4, 8)
testPrior.insertValue(44, 2)
testPrior.insertValue(19, 9)
console.log(testPrior.returnValue()) // 2 has the highest priority.


// a proper middle remover
function removeMiddle(array){
        if(array.length === 0){
            return array;
        }

        let middle = Math.floor(array.length/2);
        if(middle%2===0){
            array.splice(middle, 1);
        }else{
            array.splice(middle-1,2)
        }
        return array
}

console.log(removeMiddle([1,2,3,4,5]));
console.log(removeMiddle([1,2,3,4,5,6]));


// Rehashing. Double the size of the table once it reaches its near point like full.
let size = 7;
let array = new Array(size).fill(null);
let count = 0;


function hashfunc(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash = (hash + key.charCodeAt(i)) % size;
    }
    return hash
}

function insertValue(value){
    if(count/size > 0.7){
        Rehashing()
    }
    let index = hashfunc(value);
    while(array[index] !== null){
        index = (index+1)%size;
    }
    array[index] = value;
    count++
}


function Rehashing(){
    let oldArray = array;
    count = 0;
    size = (size*2+1);
    array = new Array(size).fill(null);
    for(let num of oldArray){
        if(num !== null){
            insertValue(num)
        }
    }
}

insertValue(10)
insertValue(20)
insertValue(30)
insertValue(40)
insertValue(50)
insertValue(60)

console.log(array);


class HashPrac{
        constructor(size){
            this.array = new Array(size);
            this.size = size;
        }   

        hashFunc(key){
            let hash = 0;
            for(let i=0; i<key.length; i++){
                hash = (hash + key.charCodeAt(i)) % this.size
            }
            return hash;
        }

        insertValue(key, value){
            let index = this.hashFunc(key);
            if(!this.array[index]){
                this.array[index] = []
            }
            this.array[index].push([key, value])
        }

        countOccur(value){
            let count = 0;
            for(let i=0; i<this.size; i++){
                if(this.array[i]){
                    for(let j=0; j<this.array[i].length; j++){
                        if(this.array[i][j][1] === value){
                            count++
                        }
                    }
                }
            }
            return count;
        }

        print(){
            for(let i=0; i<this.size; i++){
                if(this.array[i]){
                    console.log(i, this.array[i]);
                }
            }
        }
}


const testOccur = new HashPrac(10);
let arrays = [1,2,3,4,1,2,3,1];
arrays.forEach((x) => testOccur.insertValue(x.toString(), x));
testOccur.print()
console.log(testOccur.countOccur(1));


class Nodes{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackPrac{
    constructor(){
        this.top = null;
        this.size = 0
    }

    add(value){
        let node = new Nodes(value);
        if(this.isEmpty()){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.size++
    }


    remove(){
        if(this.isEmpty()){
            return null;
        }
        let remove = this.top;
        this.top = this.top.next;
        this.size--
        return remove.value;
    }

    peek(){
        if(this.isEmpty()){
            return
        }
        return this.top.value;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

}

const testStackes = new StackPrac();
testStackes.add(10)
testStackes.add(20)
testStackes.add(30)
console.log(testStackes.peek());


class testStack{
    constructor(){
        this.array = []
    }

    isEmpty(){
        return this.array.length === 0;
    }

    add(string){
        this.array.push(string)
    }

    remove(){
        return this.array.pop()
    }

    print(){
        console.log(this.array);
        
    }
}

function reverse(word){
    let stack = new testStack();
    for(let i=0; i<word.length; i++){
        stack.add(word[i])
    }

    let reverseStr = '';
    while(!stack.isEmpty()){
        reverseStr+= stack.remove();
    }
    return reverseStr;
}

const testSaatck = new testStack();
testSaatck.add('Raman');
testSaatck.add('Armstrong');
testSaatck.print()
console.log(reverse('Armstrong'));


function insertionSort(array){
        for(let i=1; i<array.length; i++){
            let j = i-1;
            let current = array[i];
            while(j>=0 && array[j]>current){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current
        }
        return array;
    }

console.log(insertionSort([7,5,2,1,3,9]));


function selectionSort(array){
        for(let i=0; i<array.length-1; i++){
            let minIndex = i;
            for(let j=i+1; j<array.length; j++){
                if(array[j]<array[minIndex]){
                    minIndex = j;
                }
            }
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
        return array;
 }

console.log(selectionSort([7,5,2,1,3,9]));

function quickSort(array){
      if(array.length<2){
        return array
      }
      let pivot = array[array.length-1]
      let left = [];
      let right = [];

      for(let i=0; i<array.length-1; i++){
        if(array[i]>pivot){
            right.push(array[i])
        }else{
            left.push(array[i])
        }
      }
      return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([7,5,2,1,3,9]));


function merge(array){
    if(array.length<2){
        return array
    }
    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return mergeSort(merge(left), merge(right))
}

function mergeSort(a1, a2){
     let sorted = [];
     while(a1.length && a2.length){
        if(a1[0]<a2[0]){
            sorted.push(a1.shift())
        }else{
            sorted.push(a2.shift())
        }
     }
     return [...sorted, ...a1, ...a2]
}

console.log(merge([7,5,2,1,3,9]));

// Linear probing.

class LinearProbes{
    constructor(size){
        this.array = new Array(size).fill(null);
        this.size = size
    }

    hashFnc(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash+key.charCodeAt(i)) % this.size
        }
        return hash
    }

    insert(key, value){
        let index = this.hashFnc(key);
        while(this.array[index] !== null){
            index = (index+1) % this.size
        }
        this.array[index] = {key, value}
    }

    search(key){
        let index = this.hashFnc(key);
        while(this.array[index] !== null){
            if(this.array[index].key === key){
                return this.array[index].value;
            }
            index = (index+1) % this.size
        }
        return undefined
    }
}

const testLinear = new LinearProbes(10);
testLinear.insert('name', 'John');
testLinear.insert('name', 'Steve');
testLinear.insert('age', 26);
console.log(testLinear.search('name'));
console.log(testLinear.search('name'));

class Quadratic{
    constructor(size){
        this.array = new Array(size).fill(null)
        this.size = size
    }

    hashGen(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash+key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    insert(key, value){
        let index = this.hashGen(key);
        let i=1;
        while(this.array[index] !== null){
            index = (this.hashGen(key) * i+i) % this.size;
            i++
        }
        this.array[index] = {key, value}
    }

    print(){
        console.log(this.array);
    }
}


const testQuadratics = new Quadratic(10);
testQuadratics.insert('name', 'Sanjiv')
testQuadratics.insert('name', 'Saara')
testQuadratics.insert('name', 'Kyle')
testQuadratics.insert('name', 'Daniel')
testQuadratics.print()



// Without using Buildin methods to write queue imple
class Queue{
    constructor(){
        this.array = [];
        this.length = 0;
    }

    enqueue(value){
        this.array[this.length] = value;
        this.length++;
    }

    dequeue(){
        if(this.length === 0){
            throw new Error('Stack underflow')
        }
        let remove = this.array[0];
        for(let i=1; i<this.length; i++){
            this.array[i-1] = array[i]
        }
        this.length--
        return remove;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.array[0]
    }

    isEmpty(){
        return this.length === 0
    }

    getSize(){
        return this.length
    }

    print(){
        let resultArray = []
        for(let i=0; i<this.length; i++){
            resultArray.push(this.array[i])
        }
        return resultArray;
    }

    reverseQueue(){
        let reverse = [];
        for(let i=this.length-1; i>=0; i--){
            reverse.push(this.array[i])
        }
        return reverse
    }

    reverseSwap(){
        if(this.length == 0){
            return null;
        }
        let start = 0;
        let end = this.length-1;
        while(start<end){
            let temp = this.array[start];
            this.array[start] = this.array[end];
            this.array[end] = temp;
            start++
            end--
        }
    }

    removeDup(){
        let uniqueQueue = [];
        let uniqueLength = 0;
        for(let i=0; i<this.length; i++){
            let found = false;
            for(let j=0; j<uniqueLength; j++){
                if(uniqueQueue[j] === this.array[i]){
                    found = true;
                    break;
                }
            }
            if(found !== true){
                uniqueQueue[uniqueLength] = this.array[i];
                uniqueLength++
            }
        }
        this.array = uniqueQueue;
        this.length = uniqueLength;
    }

    countEven(){
        let count = 0;
        for(let i=0; i<this.length; i++){
            if(this.array[i]%2===0){
                count++
            }
        }
        return count
    }

    countOdd(){
        let count = 0;
        for(let i=0; i<this.length; i++){
            if(this.array[i]%2!==0){
                count++
            }
        }
        return count;
    }

    calculateEvenSum(){
        let sum = 0;
        for(let i=0; i<this.length; i++){
            if(this.array[i]%2==0){
                sum += this.array[i]
            }
        }
        return sum;
    }

    sortQueue(){
        for(let i=0; i<this.length-1; i++){
            for(let j=0; j<this.length-1; j++){
                if(this.array[j]>this.array[j+1]){
                    let temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp
                }
            }
        }
    }

    findMax(){
        let max = this.array[0];
        for(let i=1; i<this.length; i++){
            if(max<this.array[i]){
                max = this.array[i]
            }
        }
        return max;
    }
}

const testTestQueue = new Queue();
testTestQueue.enqueue(10)
testTestQueue.enqueue(20)
testTestQueue.enqueue(70);
testTestQueue.enqueue(30);
testTestQueue.enqueue(30);
testTestQueue.enqueue(40);
testTestQueue.enqueue(50);
console.log(testTestQueue.print())

console.log(testTestQueue.peek());
console.log(testTestQueue.reverseQueue());

testTestQueue.reverseSwap();
console.log( testTestQueue.print());

console.log(testTestQueue.countEven());
console.log(testTestQueue.countOdd());
console.log(testTestQueue.calculateEvenSum());
console.log(testTestQueue.findMax());

testTestQueue.removeDup();
console.log(testTestQueue.print())

testTestQueue.sortQueue();
console.log(testTestQueue.print());
