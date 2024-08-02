array = [-6, 20, 8, -2, 4]
   
// Way 1 using build-in sort method
array.sort((a,b)=>a-b)
console.log(array);

// Way 2 using spread operator
const result = [...array].sort((a,b)=>a-b);
console.log(result);

function bubbleSort(array){
    let len = array.length;
 
    for(let i=0; i<len-1; i++){
        for(let j=0; j<len-i-1; j++){  //The number of comparisons decreases with each pass because the largest elements are already sorted towards the end of the array.
            if(array[j]>array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));
