class hashTables{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total%this.size;
    }

    set(key, value){
        const index = this.hash(key);
        // this.items[index] = value;
        const bucket = this.items[index];
        if(!bucket){
            // bucket = [[key, value]]  "It shows 'const' error".
            this.items[index] = [[key, value]]
        }else{
            // Here we update the existing value 
            const sameKeyItem = bucket.find((item )=>item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.items[index];
        if(bucket){
            const exist = bucket.find((item)=> item[0] === key);
            if(exist){
                return exist[1]
            }
        }
        return undefined
    }


    remove(key){
        const index = this.hash(key);
        const bucket = this.items[index];
        if(bucket){
               const exits = bucket.find((item) =>item[0] === key);
               if(exits){
                   bucket.splice(bucket.indexOf(exits, 1));
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

const result = new hashTables(50)

result.set('name', 'Raman')
result.set('age', 20)
result.print()

result.set('name', 'Kishore')
result.print()

console.log(result.get('name'));

result.remove('name')
result.print()