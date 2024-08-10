class Hash{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    hashFunction(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash%this.size;
    }

    insertValue(key, value){
        const index = this.hashFunction(key);
        if(!this.items[index]){
            this.items[index] = []
        }
        this.items[index].push([key, value])
    }

    getValue(key){
        let index = this.hashFunction(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyindex = bucket.find((item)=> item[0] === key);
            if(sameKeyindex){
                return sameKeyindex[1]
            }
        }
        return undefined;
    }

    removeValue(key){
        let index = this.hashFunction(key);
        let bucket = this.items[index];
        if(bucket){
            let sameKeyindex = bucket.findIndex((item)=>item[0]===key);
            if(sameKeyindex !== -1){
                bucket.splice(sameKeyindex, 1)
            }
        }
    }

    print(){
        for(let i=0; i<this.size; i++){
            if(this.items[i]){
                console.log(i, this.items[i]);
            }
        }
    }

    findoccurence(value){
        for(let i=0; i<this.size; i++){
            if(this.items[i]){
            let count = 0;
            for(let j=0; j<this.items[i].length; j++){
                if(this.items[i][j][1] === value){
                    count++
                }
            }
            return count;
          }
        
        }
       
    }
}


const HT = new Hash(10)

let array = [1, 2, 3, 4, 2, 3, 4, 1, 2, 3];
array.map((x) => HT.insertValue(x.toString(), x))
HT.print()
console.log(HT.findoccurence(2));
console.log(HT.getValue('4'));
