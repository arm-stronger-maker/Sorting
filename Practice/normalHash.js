// Understand collision
// InEffcient hash class
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

hashTest.insertValue('name', 'Tamil')

console.log(hashTest.getValue('name')) // collision occurs.



class hashPractice{
    constructor(size){
        this.size = size;
        this.items = new Array(size);
    }

    hashIndex(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += (total * 31 + key.charCodeAt(i))%this.size
        }
        return total;
    }

    set(key, value){
        let index = this.hashIndex(key);
        this.items[index] = value;
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
                
            }
        }
    }
}



const testingHash = new hashPractice(50)

testingHash.set('age', 20)
testingHash.print()
