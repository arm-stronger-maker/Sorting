let a = 10;
// toString method converts a number into string.
console.log(typeof(a)); // number
console.log(typeof(a).toString());  // string

// Using hash table to calculate the occurrence of particular value using this toString() method.

class Hash{
    constructor(size){
        this.array = new Array(size);
        this.size = size;
    }

    hashFunction(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    insertValue(key, value){
        let index = this.hashFunction(key);
        if(!this.array[index]){
            this.array[index] = [];
        }
        this.array[index].push([key, value])
    }

    getValue(key){
        let index = this.hashFunction(key);
        let bucket = this.array[index];
        if(bucket){
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined;
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


    countOccurrence(value){
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
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                console.log(i, this.array[i]);
            }
        }
    }
}


const HashTest = new Hash(10)
const array = [1,2,3,2,3,3,4,4];
array.map((x) => HashTest.insertValue(x.toString(), x));
HashTest.print();
console.log(HashTest.getValue('4'));
console.log(HashTest.countOccurrence(1));

