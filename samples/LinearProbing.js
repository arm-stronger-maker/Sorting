class LinearHash{
    constructor(size){
        this.size = size;
        this.items = new Array(size).fill(null);  // whenever perform this linear probing, we should initialize to "null" for later comparison.
    }

    hashFnc(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash * 31 + key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    insertInEfficient(key){
        let index = this.hashFnc(key);
        if(this.items[index] !== null){
            index = (index+1) % this.size;
        }
        this.items[index] = key;
    }

    insertStraightForward(key){
        let index = this.hashFnc(key);
        let startIndex = index;
        while(this.items[index] !== null){
            index = (index+1)%this.size;
            if(index === startIndex){
                console.log('Hash is Full');
                return;
            }
        }
        this.items[index] = key;
    }
}

const result = new LinearHash(7);
result.insertStraightForward('jhv')
result.insertStraightForward('oidfh')
result.insertStraightForward('lfi')
result.insertStraightForward('lfsdlifhi')
result.insertStraightForward('f')
result.insertStraightForward('dfs')
result.insertStraightForward('dfoiosfhds')
// result.insertStraightForward('dfoiosfhds')
// result.insertStraightForward('dfoiosfhdhsdfs')
console.log(result.items);
