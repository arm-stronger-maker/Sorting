// Understand collision

class Hash{
    constructor(size){
        this.size = size;
        this.items = new Array(size)
    }

    hashIndex(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash%this.size;
    }

    insertValue(key, value){
        let index = this.hashIndex(key);
        this.items[index] = value;
    }

    getValue(key){
        let index = this.hashIndex(key);
        return this.items[index];
    }

    asciiGetting(num){
        let result = this.items[num];
        console.log(num, result);
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const hashTest = new Hash(50)


hashTest.insertValue('name', 'Anu')
hashTest.print()

// hashTest.insertValue('name', 'Tamil')
// hashTest.print()

console.log(hashTest.getValue('name'))

hashTest.asciiGetting(17)