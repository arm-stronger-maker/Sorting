class Quadratic{
    constructor(size){
        this.items = new Array(size)
        this.size = size
    }   

    hashFnc(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += hash+key.charCodeAt(i);
        }  
        return hash%this.size
    }

    insert(key){
        let index = this.hashFnc(key);
        let i = 1;
        while(this.items[index] !== undefined){
            index = (this.hashFnc(key)*i+i) % this.size;
            i++
        }
        this.items[index] = key
    }

    printTable(){
        console.log(this.items);
    }
}

const testQuadratic = new Quadratic(10);
testQuadratic.insert('Another')
testQuadratic.insert('An')
testQuadratic.insert('other')
testQuadratic.insert('Ano')
testQuadratic.insert('Ant')
testQuadratic.printTable()