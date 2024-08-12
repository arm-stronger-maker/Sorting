class hashTable{
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
        if(!this.array[index]){
            this.array[index] = []
        }
        this.array[index].push([key, value]);
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

    countOccurrence(key){
        let count = 0;
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                for(let j=0; j<this.array[i].length; j++){
                    if(this.array[i][j][0] === key){
                        count++
                    }
                }
            }
        }
        return count;
    }

    removeDuplicates(){
        const uniqueArray = new Array(this.size); // create an array with our own size.
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                for(let j=0; j<this.array[i].length; j++){
                    const [key, value] = this.array[i][j];
                    let index = this.hashFunction(key);
                    if(!uniqueArray[index]){
                        uniqueArray[index] = [];
                    }
                    let existTest = uniqueArray[index].some((item) => item[1] === value); // here, we can compare both key and value separately. It gives the same result.  
                    if(!existTest){
                        uniqueArray[index].push([key, value])
                    }
                }
            }
        }
        return uniqueArray;
    }




    print(){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                console.log(i, this.array[i]);
            }
        }
    }
}

const Hash = new hashTable(50);


let array = [1,2,2,2,3,4,5,5];
array.map((x) => Hash.insertValue(x.toString(), x))
Hash.print()

console.log(Hash.countOccurrence('5'));
console.log(Hash.removeDuplicates());





// Hash.insertValue('name', 'kishore')
// Hash.insertValue('group', 'O-positive')
// console.log(Hash.getValue('name'));  kishore

