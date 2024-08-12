class Hash{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }


    hashFunction(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash+key.charCodeAt(i)) % this.size;
        }
        return hash;
    }


    insertValue(key, value){
          let index = this.hashFunction(key);
          let bucket = this.items[index];
          if(!bucket){
            this.items[index] = [[key, value]]
          }else{
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value])
            }
        }
    }

    getValue(key){
        let index = this.hashFunction(key);
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
        let index = this.hashFunction(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyItem = bucket.findIndex((item) => item[0] === key);
            if(sameKeyItem !== -1){
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


const HashTest = new Hash(50);
HashTest.insertValue('name', 'Road')
HashTest.insertValue('enam', 'Leaves')
HashTest.insertValue('mena', 'Stick')
HashTest.insertValue('amen', 'Smile')
console.log(HashTest.removeValue('name'));
HashTest.print()
// All the key-values are stored in the same index of 17. Called "Bucket"

console.log(HashTest.getValue('amen')); // Smile

