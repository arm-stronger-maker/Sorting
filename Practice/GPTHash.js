class GPTHash{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    generateHashIndex(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    addValue(key, value){
        let index = this.generateHashIndex(key);
        let bucket = this.items[index];
        if(!bucket){
            this.items[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key){
        let index = this.generateHashIndex(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyItem  = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined;
    }

    remove(key){
        let index = this.generateHashIndex(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                bucket.splice(sameKeyItem, 1)
            }
        }
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }

}


const hashTest = new GPTHash(50);

hashTest.addValue('name', 'Raman')
hashTest.addValue('mane', 'Kishore')
hashTest.addValue('name', 'Prajitha')
hashTest.print()

console.log(hashTest.get('name'))
// hashTest.print()

hashTest.remove('mane')
hashTest.print()