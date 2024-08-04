// array = [-6, 20, 8, -2, 4]
   
// // Way 1 using build-in sort method
// array.sort((a,b)=>a-b)
// console.log(array);

// // Way 2 using spread operator
// const result = [...array].sort((a,b)=>a-b);
// console.log(result);


// // Way 3 using bubble sort
// function bubbleSort(array){
//     let len = array.length;
 
//     for(let i=0; i<len-1; i++){
//         for(let j=0; j<len-i-1; j++){  //The number of comparisons decreases with each pass because the largest elements are already sorted towards the end of the array.
//             if(array[j]>array[j+1]){
//                 [array[j], array[j+1]] = [array[j+1], array[j]]
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSort(array));


// function bubbleSortArray(array){
//     let swapped;
//     do{
//      swapped = false;
//     for(let i=0; i<array.length-1; i++){  // Oru for loop mattum irundha, one time dhan loop run aagum. So we need to add do while loop here.
//         if(array[i]>array[i+1]){
//             let temp = array[i]
//             array[i] = array[i+1];
//             array[i+1] = temp;
//             swapped = true; 
//          }
//       } 
//    } while(swapped)
//     return array
//  }

// console.log(bubbleSortArray([-6, 20, 8, -2, 4]));


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
        //  console.log(`After iteration ${i}:`, array.join(', '));
    }
    return array
}

console.log(insertSort([64, 34, 25, 12, 22, 11, 90]));

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Initial array:", array.join(', '));
insertSort(array);
console.log("Sorted array:", array.join(', '));


// Quick sort [8, 20, -2, 4, -6]  => [-6, -2, 4, 8, 20]
function quickSortArray(array){
    if(array.length<2){
        return array;
    }
    // Lets take a pivot element from the array.
    let pivot = array[array.length-1] // taking pivot as the last element.
    let left = [];
    let right = [];

    for(let i=0; i<array.length-1; i++){
        if(array[i]<pivot){
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSortArray(left), pivot, ...quickSortArray(right)]
}

console.log();
console.log(quickSortArray([8, 20, -2, 4, -6]));



//Merge Sort
function mergeSort(array){
    if(array.length<2){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle);
    return merge(mergeSort(leftArray), mergeSort(rightArray))  // It recursively calls left and right. each half is further divided and sorted until the base case is reached
}   // finally, it returns a sorte version of left and right array.
    // Once both halves are sorted, the merge function is called with the two sorted arrays as arguments.
    // The merge function then combines these two sorted arrays into a single sorted array.

function merge(left, right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted ,...left, ...right]
}


let arrays = [8, 20, -2, 4, -6]
console.log(mergeSort(arrays));

let a = [] 
console.log(a.length);

/*

Let's break down the `mergeSort` algorithm with detailed visualization, focusing on the recursion of 
`mergeSort(leftArray)` and `mergeSort(rightArray)`, and the merging process where elements are compared, allocated, and swapped.

### Initial Array: [8, 20, -2, 4, -6]

**Step 1: Initial Call to `mergeSort`**

1. **Split** the array into two halves:
   - `leftArray = [8, 20, -2]`
   - `rightArray = [4, -6]`

**Step 2: Recursion on Left Array [8, 20, -2]**

1. **Split** `leftArray` into:
   - `leftArray = [8]`
   - `rightArray = [20, -2]`

2. **Recursion on Left Array [8]**:
   - Base case reached (`array.length < 2`), returns `[8]`.

3. **Recursion on Right Array [20, -2]**:
   - **Split** `rightArray` into:
     - `leftArray = [20]`
     - `rightArray = [-2]`
   
   - **Recursion on Left Array [20]**:
     - Base case reached, returns `[20]`.

   - **Recursion on Right Array [-2]**:
     - Base case reached, returns `[-2]`.

**Step 3: Merge [20] and [-2]**

1. **Comparison**:
   - Compare `20` and `-2`. Since `-2 < 20`, `-2` is added to the sorted array.
   - Remaining elements are `20`.

2. **Result**: `[-2, 20]`

**Step 4: Merge [8] and [-2, 20]**

1. **Comparison**:
   - Compare `8` and `-2`. Since `-2 < 8`, `-2` is added to the sorted array.
   - Next, compare `8` and `20`. Since `8 < 20`, `8` is added to the sorted array.
   - Remaining elements are `20`.

2. **Result**: `[-2, 8, 20]`

**Step 5: Recursion on Right Array [4, -6]**

1. **Split** `rightArray` into:
   - `leftArray = [4]`
   - `rightArray = [-6]`

2. **Recursion on Left Array [4]**:
   - Base case reached, returns `[4]`.

3. **Recursion on Right Array [-6]**:
   - Base case reached, returns `[-6]`.

**Step 6: Merge [4] and [-6]**

1. **Comparison**:
   - Compare `4` and `-6`. Since `-6 < 4`, `-6` is added to the sorted array.
   - Remaining elements are `4`.

2. **Result**: `[-6, 4]`

**Step 7: Merge [-2, 8, 20] and [-6, 4]**

1. **Comparison**:
   - Compare `-2` and `-6`. Since `-6 < -2`, `-6` is added to the sorted array.
   - Next, compare `-2` and `4`. Since `-2 < 4`, `-2` is added to the sorted array.
   - Next, compare `8` and `4`. Since `4 < 8`, `4` is added to the sorted array.
   - Remaining elements are `8` and `20`.

2. **Result**: `[-6, -2, 4, 8, 20]`

### Final Sorted Array
`[-6, -2, 4, 8, 20]`

Each step involves breaking down the array into smaller sub-arrays and then merging them back 
together in sorted order. The base cases for recursion occur when arrays are of length 1, and 
the merging process involves comparing elements from the left and right sub-arrays, building 
up the sorted result.

*/