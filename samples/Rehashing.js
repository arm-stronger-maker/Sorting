let size = 7;
let array = new Array(size).fill(null);
let count = 0;


function hashKey(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash = (hash*31 + key.charCodeAt(i)) % size;
    }
    return hash;
}


function insertkey(key){
    while(count / size > 0.7){
        rehash()
    }
    let index = hashKey(key);
    if(array[index] !== null){
        index = (index + 1) % size;
    }
    array[index] = key;
    count++
}


function rehash(){
    let oldArray = array;
    size = size * 2 + 1;
    array = new Array(size).fill(null);
    count = 0;

    for(let num of oldArray){
        if(num !== null){
            insertkey(num)
        }
    }
}


insertkey('kd')
insertkey('kd')
insertkey('kd')
insertkey('kd')
insertkey('kd')
insertkey('kd')

console.log(array);
