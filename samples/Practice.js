class Hash {
    constructor(size){
        this.size = size;
        this.items = new Array(size).fill(null);
    }

    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash;
    }

    insert(key, value){
        let index = this.hash(key);
        if(this.items[index] !== null){
            index = (index+1)%this.size
        }
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


const practice = new Hash(50)
practice.insert('name', 'Raman')
practice.insert('name', 'Kishore')
practice.insert('age', 21)
practice.insert('city', 'Kerala')
practice.print()