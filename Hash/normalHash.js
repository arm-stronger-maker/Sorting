/*  It supports three main operations
1. Set to store a key value pairs
2. Get to retrive the value using its key
3. Remove to delete a value using its key

4. Hashing function => It converts a string key into a numeric index Which is important to store the data in an array
*/


class hashTable{
    constructor(size){  // Size determine the overall size of the array. Here it is 50 size of an array 
        this.items = new Array(size);  // Using the size, to create an array using new Array() method
        this.size = size;  // We track the size of the array constantly.
    }
    
    hash(key){  // Convert the current key into specific position between 0 to 49. Randomly. It allocates a random position to stote this key value.
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size;
    }  

    set(key,value){
        const index = this.hash(key);
        this.items[index] = value;
    }

    get(key){
        const index = this.hash(key);
        return this.items[index];
    }

    remove(key){
        const index = this.hash(key);
        this.items[index] = undefined
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const result = new hashTable(50);  // Increase the size, we can add more key-values inside the array.

result.set('name', 'Raman')
result.set('age', 20)
result.set('city', 'Salem')
result.print()
 
console.log(result.get('city'))

// result.remove('age')
// result.print()

result.set('mane', 'krish');  // Here is a bug. It overwrites the former name key. previous key is "name" => charCodeAt is 17. "mane" => Also have same charCodeAt = 17.
result.print()                // So, it has overwrite the different value in the existing same key. It leads to we might loss the previous name "Raman".
// It is called COLLISIONS


const str = "The quick brown fox jumps over the lazy dog"
console.log(str.indexOf('o', 15)) // 17

/*
indexOf() => The indexOf method in JavaScript returns the index of the 
first occurrence of a specified value in a string. The method can also 
take a second argument, which specifies the position in the string to start the search.

let sample = 'Hello'
console.log(sample.indexOf('H'))  // 0
*/


/* charCodeAt()
It returns the ASCII value of the particular character in the string

let sample = 'Hello'
console.log(sample.charCodeAt(0))  // H => AsSCCI of 72
console.log(sample.charCodeAt(0))  // e => AsSCCI of 101
*/