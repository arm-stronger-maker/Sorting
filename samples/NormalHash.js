class Hash{
    constructor(size){
        this.array = new Array(size);
        this.size = size;
    }

    hashFunction(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }


    insert(key, value) {
        let index = this.hashFunction(key);
        this.array[index] = value;
    }


    getValue(key){
        let index = this.hashFunction(key);
        if(this.array[index]){
            return this.array[index]
        }else{
            return undefined
        }
    }

    removeValue(key){
        let index = this.hashFunction(key);
        this.array[index] = null;
    }

    print(){
        for(let i=0; i<this.array.length; i++){
            if(this.array[i]){
                console.log(i, this.array[i]); 
            }
        }
    }
}


const HashTest = new Hash(50);
HashTest.insert('name', 'Ram')
HashTest.insert('age', 21)
HashTest.insert('age', 22) // Here, it overwrites the existing value, is called Collision.
HashTest.print()