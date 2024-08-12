function insertionSort(array){
        for(let i=1; i<array.length; i++){
            let current = array[i];
            let j = i-1;
            while(j>=0 && array[j]>current){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array;
}
console.log(insertionSort([7,4,1,3,9,2]));
