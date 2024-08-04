array1 = [1,2]
array2 = [3,4]

/* The Cartesian product of array1 and array2 will result in an array of pairs, 
 where each pair consists of an element from array1 and an element. 
 where the first element in array1, that contact with "ALL" the second element from the second array. */

function cartesianProductOfTwoArray(array1, array2){
    let result = [];
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            result.push([array1[i],array2[j]])
        }
    }
    return result;
}

console.log(cartesianProductOfTwoArray(array1, array2));  // [ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]. This is a Cartesian product of Two arrays.

/* Time complexity of Cartesian Pproduct function is => O(m×n) m = array1.length; n = array2.length;
   This complexity indicates that the time required to compute the Cartesian product 
   grows linearly with the product of the sizes of the two input arrays. */


/* 
   Climbing staircase
   formula looks like Fibonacci series. => fib[n-1] + fib[n-2] 
   refer climbing staircase images. 
   The number of ways to climb (n) = the number of ways[n-1] + the nm=umber of ways[n-2]. same as Fibonacci.

   question: Given a staircase with n steps, you can either take 1 step or 2 steps at a time. 
   Your goal is to determine the number of distinct ways to reach the top of the staircase?
*/

function climbStair(n){
    if(n===0) return 1;
    if(n===1) return 1;

    let probability = new Array(n+1).fill(0);
    probability[0] = 1;
    probability[1] = 1;

    for(let i=2; i<=n; i++){
        probability[i] = probability[i-1] + probability[i-2]; 
    }

    return probability[n];
}

console.log(climbStair(7));


// Time complexity => O(n) time.
// Loop: The for loop runs from 2 to n, which also takes O(n) time.