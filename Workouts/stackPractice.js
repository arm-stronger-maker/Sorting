class stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length;
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
       return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        return this.items[this.items.length-1]
    }

    print(){
         if(this.isEmpty()){
          console.log('Stack is empty');
         }
         console.log(this.items);
    }

    reverseStack(){
        let reverse = new stack();
        while(!this.isEmpty()){
            reverse.push(this.items.pop())
        }
        return reverse
    }

    removeDup(){
        let uniqUueSet = new Set();
        let resultArray = [];
        for(let i=0; i<this.items.length; i++){
            if(!uniqUueSet.has(this.items[i])){
                uniqUueSet.add(this.items[i]);
                resultArray.push(this.items[i])
            }
        }
        return resultArray;
    }


    countEven(){
        let count = 0;
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]%2 === 0){
                count++
            }
        }
        return count;
    }


    calculateEvenSum(){
        let sum = 0;
        for(let i=0; i<this.items.length; i++){
            if(this.items[i]%2 === 0){
                sum += this.items[i]
            }
        }
        return sum;
    }


    sortStack(){
        let sorted = [];
        while(!this.isEmpty()){
            sorted.push(this.pop())
        }
        sorted.sort((a, b) => a-b);
        return sorted
    }
}

const testStack = new stack();
const array = [5, 6, 5, 6, 7, 2, 1, 3];
array.forEach((x) => testStack.push(x));

console.log('Original stack array');
console.log('peek:', testStack.peek()); // 3 
// testStack.pop() // 3 should be removed
testStack.print()



console.log('Reverse stack');
console.log(testStack.reverseStack());

console.log('Remove Duplicates stack');
console.log(testStack.removeDup());

console.log('Count even occurrences:');
console.log(testStack.countEven());

console.log('Calculate the summation of even :');
console.log(testStack.calculateEvenSum());

console.log(testStack.sortStack());
