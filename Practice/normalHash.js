// Understand collision
// InEffcient hash class
class Hash{
    constructor(size){
        this.size = size;
        this.items = new Array(size)
    }

    hashIndex(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash%this.size;
    }

    insertValue(key, value){
        let index = this.hashIndex(key);
        this.items[index] = value;
    }

    getValue(key){
        let index = this.hashIndex(key);
        return this.items[index];
    }

    asciiGetting(num){
        let result = this.items[num];
        console.log(num, result);
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const hashTest = new Hash(50)


hashTest.insertValue('name', 'Anu')

hashTest.insertValue('name', 'Tamil')

console.log(hashTest.getValue('name')) // collision occurs.



class hashPractice{
    constructor(size){
        this.size = size;
        this.items = new Array(size);
    }

    hashIndex(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += (total * 31 + key.charCodeAt(i))%this.size
        }
        return total;
    }

    set(key, value){
        let index = this.hashIndex(key);
        this.items[index] = value;
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
                
            }
        }
    }
}



const testingHash = new hashPractice(50)

testingHash.set('age', 20)
testingHash.print()
testingHash.set('age', 22)
testingHash.print()
// But the issue is, it overwrites the pre exisiting valu, means also it have the collision issue. It is only applicable for better distribution. In case of same keys are occurs, it overwrites.


// there are some techniques available to prevent collisons  such as Linear probing, seperate chaining.

class hashwithOutCollision{
    constructor(size){
        this.items = new Array(size).fill(null); //  should be initialized with null values to begin with.
        this.size = size;  
    }

    betterHash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total = (total * 31 + key.charCodeAt(i)) % this.size  // ****
        }
        return total;
    }
    
    /*  Without has the size monitor 
    insertValue(key){
        let index = this.betterHash(key);
        while(this.items[index]!==null){
            index = (index+1)%this.size;
        }
        this.items[index] = key;
    }
    */

    // With size monitor.
    insertValueWith(key){
        let index = this.betterHash(key);
        let startIndex = index; //Store the start index to detect if the table is full
        while(this.items[index] !== null){
            index = (index+1)%this.size;
            if(index === startIndex){
                console.log('HASH is Full');
                return;
            }
        }
        this.items[index] = key;
    }
}

const withOutCollision = new hashwithOutCollision(7);

withOutCollision.insertValueWith('Raman')
withOutCollision.insertValueWith('Kishore')
withOutCollision.insertValueWith('Armstrong')
withOutCollision.insertValueWith('Leader')
withOutCollision.insertValueWith('Typing')
withOutCollision.insertValueWith('Food')
withOutCollision.insertValueWith('Boat')
withOutCollision.insertValueWith('Where the dresses')
// withOutCollision.insertValueWith('Move accross')
// withOutCollision.insertValue('Walk') ...It leads to infinte loop. Because array attains its max size.
// Also, Linear probing mostly follows like circular queue. Slot is occupied one by one. Sequentially. 
// Rewrites the insertFUNtion.

console.log(withOutCollision.items);

