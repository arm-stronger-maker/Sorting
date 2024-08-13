function insertionSort(array){
        for(let i=1; i<array.length; i++){
            let current = array[i];
            let j= i-1;
            while(j>=0 && array[j]>current){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array;
  }
console.log(insertionSort([3, 2, 1, 5, 6, 4]));



function selectionSort(array){
        for(let i=0; i<array.length-1; i++){
            let minIndex = i;
            for(let j=i+1; j<array.length; j++){
                if(array[j]<array[minIndex]){
                    minIndex = j;
                }
            }
            if(minIndex!==i){
                [array[i], array[minIndex]] = [array[minIndex], array[i]]
            }
        }
        return array;
}

console.log(selectionSort([3, 2, 1, 5, 6, 4]));


function quickSort(array){
        if(array.length<2){
            return array;
        }

        let pivot = array[array.length-1];
        let left = [];
        let right = [];
        for(let i=0; i<array.length-1; i++){
                if(array[i]<pivot){
                    left.push(array[i])
                }else{
                    right.push(array[i])
                }
        }
        return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort([3, 2, 1, 5, 6, 4]));


function mergeSort(array){
    if(array.length<2){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}


function merge(a1, a2){
    let sorted = [];
    while(a1.length && a2.length){
        if(a1[0]<a2[0]){
            sorted.push(a1.shift())
        }else{
            sorted.push(a2.shift())
        }
    }
    return [...sorted, ...a1, ...a2]
}

console.log(mergeSort([3, 2, 1, 5, 6, 4]));
