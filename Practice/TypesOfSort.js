// Normal insertion sort 
function insertionSort(array){
        for(let i=1; i<array.length; i++){
            let current = array[i];
            let j= i-1;
            while(j>=0 && array[j]>current){  // While loop dhan use pannanum.
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array
}

console.log(insertionSort([6,7,1,3,2,9]));


function selectionSort(array){
        for(let i=0; i<array.length-1; i++){
            let minIndex = i;
          for(let j=i+1; j<array.length; j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
          }

          if(minIndex !== i){
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
          }
        }
        return array;
}

console.log(selectionSort([5,9,2,4,7,1,6]));



function bubbleSort(array){
        for(let i=0; i<array.length-1; i++){
            for(let j=0; j<array.length-i-1; j++){
                if(array[j]>array[j+1]){
                    [array[j], array[j+1]] = [array[j+1], array[j]]
                }
            }
        }
        return array;
}

console.log(bubbleSort([3,5,7,9,1,2,6]));



function quickSort(array){
    if(array.length<2){
        return array;  // base case is important in this case. without this, it shows stack error
    }

    let pivot = array[array.length-1] // taking the last element for comparing.
    let left = []
    let right = [];

    for(let i=0; i<array.length-1; i++){  // skip the last index element.
        if(array[i]<pivot){
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([3,5,8,1,2,6.7]));


function mergeSort(array){
        if(array.length<2){
            return array;
        }
        let middle = Math.floor(array.length/2);
        let leftArray = array.slice(0, middle);
        let rightArray = array.slice(middle);
        return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(array1, array2){
    let sorted = [];
    while(array1.length && array2.length){
            if(array1[0] <= array2[0]){
                sorted.push(array1.shift())
            } else {
                sorted.push(array2.shift())
            }
    }
    return [...sorted, ...array1, ...array2]
}

console.log(mergeSort([3,5,7,9,1,4]));
















// Insertion sort => 1st and 0th element comparison. Front and prervious with help of "j"
// Selection sort => minIndex swapping.