class LinearProbe{
    constructor(size){
        this.array = new Array(size).fill(null);
        this.size = size;
    }

    hashFunction(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total = (total*31 + key.charCodeAt(i)) % this.size;
        }
        return total
    }


    insertValue(key){
        let index = this.hashFunction(key);
        let startIndex = index;
        while(this.array[index] !== null){
            index = (index + 1) % this.size;
            if(index === startIndex){
                console.log('Space gets full');
                return;
            }
        }
        this.array[index] = key;
    }
}

const testHash = new LinearProbe(5)
testHash.insertValue('A')
testHash.insertValue('E')
testHash.insertValue('R')
testHash.insertValue('O')
testHash.insertValue('P')
testHash.insertValue('L') // Space gets full
console.log(testHash.array);
