let size = 7;
let array = new Array(size).fill(null);
let count = 0;

function hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % size;
    }
    return hash;
}

function insertKey(key) {
    if (count / size > 0.7) {
        rehash();
    }

    let index = hashKey(key);
    while (array[index] !== null) {
        index = (index + 1) % size;
    }
    array[index] = key;
    count++;
}

function rehash() {
    let oldArray = array;
    size = size * 2 + 1; 
    array = new Array(size).fill(null);
    count = 0;

    for (let num of oldArray) {
        if (num !== null) {
            insertKey(num);
        }
    }
}

// Example usage
insertKey('name');
insertKey('age');
insertKey('city');
insertKey('country');
insertKey('continent');
insertKey('planet');

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


function selectionSort(array){
     for(let i=0; i<array.length-1; i++){
            let minIndex = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[minIndex]){  /// minIndex is important
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
     }
     return array;
}

console.log(selectionSort([5, 2, 9, 1, 5, 6]));
