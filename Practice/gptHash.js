class Hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size;
    }

    generateHashIndex(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash%this.size;
    }


    // This implementation handles collisions (when different keys hash to the same index) by using separate chaining.
    // each bucket can hold multiple key-value pairs in an array.
    set(key, value){  
        let index = this.generateHashIndex(key);  //  "convert the key into a number" for storing our key-value pair.
        let bucket = this.table[index];  // bucket contains an array to store key value pairs     
        if(!bucket){
            this.table[index] = [[key, value]]; // If the bucket doesn't exist, it creates a new bucket with the key-value pair.  The bucket is an array containing another array (the key-value pair).
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value  // 0 => key, 1 => value;
            } else {
                bucket.push([key, value])
            }
        }   
    }

    get(key){
        let index = this.generateHashIndex(key);
        const bucket = this.table[index];
        if(bucket){
            let findGivenKey = bucket.find((item)=>item[0] === key);
            if(findGivenKey){
                return bucket[1];
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.generateHashIndex(key);
        let bucket = this.table[index];
        if(bucket){
            let findOutIfExist = bucket.find((item)=>item[0]===key);
            if(findOutIfExist){
                bucket.splice(bucket.indexOf(findOutIfExist, 1))
            }
        }
    }


    print(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
                
            }
        }
    }
}


const test = new Hash(50)

test.set('name', 'Raman')
// test.set('name', 'Kishore') // this line replaces Raman into Kishore.
test.set('mane', 'Armstrong') // This line creates a seperate small array within the same index. [Within the bucket]

// console.log(test.get('mane'));
test.remove('mane');

test.print()
