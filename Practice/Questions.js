
// Normal build-in sort method
array = [5, 3, 8, 1, 2]

let ascending = array.sort((a, b) => a-b);
console.log('Ascending order - ',ascending);

let decending = array.sort((a,b) => b-a);
console.log('Decending order - ',decending);




// Understand what collision is, we need to create a basic hash class with hash method.
class hashTable {
    constructor(size){
        this.size = size; // we assign the give size into a separate variable for future accessibility.
        this.items = new Array(size); // Here, we create an array with the user's defined size. 
    }

    hash(key){  // Keep mind => It accepts a string. It converts the string into ASCII values. Add the ASCII values ans return a number. This number is called "Hash".
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    insertValue(key, value) {
        let index = this.hash(key); // we generate a hash number for this particular key.
        this.items[index] = value;
    }

    retriveValue(key) {  // Using the particular key to access their value. It returns the value for our key.
        let index = this.hash(key);
        return this.items[index];
    }

    asciiGetting(num){
        let result = this.items[num];
        console.log(num, result);
    }

    print() {
        for (let i=0; i<this.items.length; i++){
            if(this.items[i]) {
                console.log(i, this.items[i]);
                
            }
        }
    }
}

const list = new hashTable(50)  // Take the size is 50. 


// Here, String 'name' is converted into sum of ASCII values used the string character. name === 17
list.insertValue('name', 'Armstrong')  // 17, Armstrong
list.print()
list.insertValue('mane', 'Prem')  // Here also, it writes Prem in '17'. Here the collision is happening.

list.asciiGetting(17);



// Some ways are there try to reduce the issue of Collision.


// 1. Handling hash function in better way. 
class hashPractice{
    constructor(size) {
        this.size = size;
        this.items = new Array(size); // as same as before we declared. 
    }

    betterHash(key) {
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += (total * 31 + key.charCodeAt(i)) % this.size;  // Add extra syntax of "total * 31 + ".
        } // This hash function uses a prime number multiplier (31) to better distribute the hash values.
        return total;
    }

    set(key, value) {
        let index = this.betterHash(key);
        this.items[index] = value;
    }

    print(){
        for (let i=0; i<this.items.length; i++){
            if(this.items[i]) {
                console.log(i, this.items[i]);
            }
        }
    }
}

console.log();
console.log(); // for space in terminal
const practice = new hashPractice(50);
practice.set('name', 'Raman')  // 97, Raman
practice.set('mane', 'Kishore') // 111 Kishore. So as expected, it allocates our value in different places. So it reduces the chances to perform Collision.
practice.print()


// 2. Increaing the size of array also reduce the issue of collision. Because teh array size is broad. less chances to get collisioned.

// Perform other new Techniques.

class hashwithOutCollision {
    constructor(size){
        this.size = size; 
        this.items = new Array(size).fill(null); // Initialize with nulls 
    }

    hash(key){  
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;  // 31 is crucial. 
        }
        return hash;
    }

    LinearInsert(key){
        let index = this.hash(key);
        while(this.items[index] !== null) {  // Linear probing if index already has some value, we perform [ index + 1 ] 
            index = (index + 1) % this.size;
        }
        this.items[index] = key;
    }
}

console.log();
console.log();
console.log(); // for spaces
const test = new hashwithOutCollision(7);  // Choose a prime number for better distribution
test.LinearInsert('Cake');
test.LinearInsert('Sweet');
test.LinearInsert('Lime');
test.LinearInsert('Coin');

console.log(test.items);




// Rehashing => If the hash table becomes too full (high load factor), resize it and rehash all the keys into the new larger table.

let hashTableSize = 7;
let hashTableTest = new Array(hashTableSize).fill(null); // initially it is null; Empty
let count = 0;

// Write two functions to achieve ReHashing.

function BETTERHash(key) {
    let total = 0;
    for(let i=0; i<key.length; i++){
        total = (total * 31 + key.charCodeAt(i)) % hashTableSize;
    }
    return total;
}


function insertKeyWithRehash(key) {
    if(count/hashTableSize > 0.7){
        rehash()  // If our array is full, we call the funuction rehash() to increase the size of array.
    } 

    let index = BETTERHash(key);
    while(hashTableTest[index] !== null) {
        index = (index+1)%hashTableSize;
    }
    hashTableTest[index] = key;
    count++;
}

function rehash() {
    const oldTable = hashTableTest;
    hashTableSize = hashTableSize * 2 + 1;  // Increase size and choose next prime number
    hashTableTest = new Array(hashTableSize).fill(null);
    count = 0;

    for(let entry of oldTable) {
        if(entry !== null) {
            insertKeyWithRehash(entry);  // Reallocate the pre-existing values to new locations.
        }
    }
}

insertKeyWithRehash('malayalam')
insertKeyWithRehash('lammalaya')

console.log(hashTableTest);




// which sort is best for smaller value? Generally for smaller arrays, simple and efficient sorting algorithms 
// like Insertion Sort and Selection Sort are considered best due to their simplicity and low overhead.
// Stability: Yes, it maintains the relative order of equal elements. Adaptiveness: Performs better on nearly sorted arrays.


// Insertion Sort
function insertionSort(array){
    for(let i=1; i<array.length; i++){
        let current = array[i];
        let j = i - 1;

        while(j>=0 && array[j] > current) {
            array[j+1] = array[j];  // It compares index0 and index1 element.
            j--;
        }
        array[j+1] = current;
    }
    return array;
}

console.log(insertionSort([5, 2, 9, 1, 5, 6]));  // [ 1, 2, 5, 5, 6, 9 ]. It satify the Condition "Stability": it maintains the relative order of equal elements


// Selection Sort => Same as insertionSort. But very very small difference in Swapping.
function SelectionSort(array){
    for(let i=0; i<array.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]/*array[1] = 2*/ < array[minIndex]/*array[0] = 5*/){
                minIndex = j;  // Above if condition is true;
            }
        }
        if(minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swapping
        }
    }
    return array;
}

console.log(SelectionSort([5, 2, 9, 1, 5, 6]));
