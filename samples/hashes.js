class Hash{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    hashGenerator(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insertValue(key, value){
        let index = this.hashGenerator(key);
        let bucket = this.items[index];
        if(!bucket){
            this.items[index] = [[key, value]];  // jagged array create the bucket;
        } else {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }


    getValue(key){
        let index = this.hashGenerator(key);
        let bucket = this.items[index];

        if(bucket){
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }


    removeValue(key){
        let index = this.hashGenerator(key);
        let bucket = this.items[index];
        if(bucket) {
            let sameKeyItem = bucket.find((item) =>item[0] === key);
            if(sameKeyItem){
                bucket.splice(sameKeyItem,1) 
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


const resultHash = new Hash(50);

resultHash.insertValue('name', 'Kishore') 
resultHash.insertValue('mena', 'Armstrong')
resultHash.insertValue('mane', 'NoteBooks')

resultHash.removeValue('name')

resultHash.print()
