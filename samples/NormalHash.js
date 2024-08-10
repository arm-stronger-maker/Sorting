class normalHash{
    constructor(size){
        this.size = size;
        this.items = new Array(size);
    }

    hashFnc(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    insert(key, value){
        let index = this.hashFnc(key);
        this.items[index] = value;
    }

    get(key){
        let index = this.hashFnc(key);
        return this.items[index]
    }

    remove(key){
        let index = this.hashFnc(key);
        this.items[index] = null;
    }

    print(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }
}


const result = new normalHash(50);
result.insert('name', 'Raman Armstrong')
result.insert('ggg', 'Rajalakshmi')
result.remove('name')
result.print();

console.log(result.get('name'));


