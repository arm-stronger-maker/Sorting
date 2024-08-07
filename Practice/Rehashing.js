let size = 7;
let array = new Array(size).fill(null)
let count = 0;


function hashKey(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash += (hash*31 + key.charCodeAt(i)) % size;
    }
    return hash;
}


function insertKey(key){
    if(count/size > 0.7) {
        rehash();
    }  // base case.

    let index = hashKey(key);
    while(array[index] !== null){
        index = (index+1) % size
    }
    array[index] = key;
    count++;
}


function rehash() {
    let oldArray = array;
    size = size * 2 + 1; 
    array = new Array(size).fill(null);
    count = 0;

    for(let num of oldArray){
        if(num !== null){
            insertKey(num);
        }   
    }
}


insertKey('Malayalam')
insertKey('lamMalaya')
insertKey('Lemon')
insertKey('Serum')
insertKey('Eight')
insertKey('Text')
insertKey('Accquire')
insertKey('Drives')
insertKey('lsdif')
insertKey('aoidh')
insertKey('Drasdooiasives')
insertKey('aoidhd')
insertKey('aoidh')
insertKey('asoidas')
insertKey('aspodoj')
insertKey('asosidh')
console.log(array);

// It's will gradually increase the size of the array with increase the number of inputs. 




// INsertion sort for smaller arrays
function insertionSort(array){
    for(let i=1; i<array.length; i++){
        let current = array[i];
        let j = i-1;

        while(j>=0 && array[j]>current){
            array[j+1] = array[j];
            j--
        }
        array[j+1] = current;
    }
    return array;
}


console.log(insertionSort([7,2,3,7,1,4,8]));
