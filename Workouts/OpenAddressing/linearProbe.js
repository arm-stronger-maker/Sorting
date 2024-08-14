class LinearHash{
    constructor(size){
        this.array = new Array(size).fill(null);
        this.size = size;
    }

    hashFnc(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash%this.size
    }

    insertValue(key, value){
        let index = this.hashFnc(key);
        while(this.array[index] !== null){
            index = (index+1)%this.size;
        }
        this.array[index] = {key, value};
    }

    searchValue(key){
        let index = this.hashFnc(key);
        while(this.array[index] !== null){
            if(this.array[index].key === key){
                return this.array[index].value
            }
            index = (index+1)%this.size
        }
        return undefined
    }
}

const hashTable = new LinearHash(10);
hashTable.insertValue('name', 'kyle');
hashTable.insertValue('age', 25);
hashTable.insertValue('occupation', 'Berlin');

console.log(hashTable.searchValue('name'));
console.log(hashTable.searchValue('age'));
console.log(hashTable.searchValue('occupation'));
console.log(hashTable.searchValue('ooo'));
