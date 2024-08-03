
//Insertion sorting
function insertSort(array){
    let len = array.length;

    for(let i=1; i<len; i++){
        let currentElement = array[i];
        let j = i-1;

        while(j>=0 && array[j]>currentElement){
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = currentElement;

         // Log the array after each iteration to show the sorting process
         console.log(`After iteration ${i}:`, array.join(', '));
    }
    return array
}

console.log(insertSort([64, 34, 25, 12, 22, 11, 90]));

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Initial array:", array.join(', '));
insertSort(array);
console.log("Sorted array:", array.join(', '));



After iteration 1: 34, 64, 25, 12, 22, 11, 90

After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
After iteration 4: 12, 22, 25, 34, 64, 11, 90
After iteration 5: 11, 12, 22, 25, 34, 64, 90
After iteration 6: 11, 12, 22, 25, 34, 64, 90
[
  11, 12, 22, 25,
  34, 64, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
After iteration 4: 12, 22, 25, 34, 64, 11, 90
After iteration 5: 11, 12, 22, 25, 34, 64, 90
After iteration 6: 11, 12, 22, 25, 34, 64, 90
Sorted array: 11, 12, 22, 25, 34, 64, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
After iteration 4: 12, 22, 25, 34, 64, 11, 90
After iteration 5: 11, 12, 22, 25, 34, 64, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
After iteration 4: 12, 22, 25, 34, 64, 11, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
]
Initial array: 64, 34, 25, 12, 22, 11, 90
]
]
]
Initial array: 64, 34, 25, 12, 22, 11, 90
After iteration 1: 34, 64, 25, 12, 22, 11, 90
After iteration 2: 25, 34, 64, 12, 22, 11, 90
After iteration 3: 12, 25, 34, 64, 22, 11, 90
After iteration 4: 12, 22, 25, 34, 64, 11, 90
After iteration 5: 11, 12, 22, 25, 34, 64, 90
After iteration 6: 11, 12, 22, 25, 34, 64, 90
Sorted array: 11, 12, 22, 25, 34, 64, 90
