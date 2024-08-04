
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




