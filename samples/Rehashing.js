let size = 7;
let array = new Array(size).fill(null);
let count = 0;


function hashing(key){
    let total = 0;
    for(let i=0; i<key.length; i++){
        total = (total + key.charCodeAt(i)) % size;
    }
    return total;
}


function insertValue(key){
    if(count/size > 0.7){
        reHashing()
    }
    let index = hashing(key);
    if(array[index] !== null){
        index = (index+1)%size;
    }
    array[index] = key;
    count++
}


function reHashing(){
    let oldArray = array;
    size = size * 2 + 1;
    array = new Array(size).fill(null);
    count = 0;
    for(let num of oldArray){
        if(num !== null){
            insertValue(num)
        }
    }
}


insertValue('A')
insertValue('B')
insertValue('C')
insertValue('D')
insertValue('E')
insertValue('F')
insertValue('G')
insertValue('ZZ')
console.log(array);
