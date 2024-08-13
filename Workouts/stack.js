class stack{
    constructor(){
        this.items = [];
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.items.length === 0
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
            return null;
        }
        return this.items[this.items.length-1]; // stack contains the first element at the last position
    }

    // reverse the stack
    reverseStack() {
        let reverse = new stack();
        while(!this.isEmpty()) {
            reverse.push(this.items.pop())
        }
        return reverse;
    }

  
    // Remove duplicates from the stack and maintain original order
    removeDuplicates() {
        let uniqueSet = new Set();
        let resultArray = [];

        for (let i = 0; i < this.items.length; i++) {
            let current = this.items[i];
            if (!uniqueSet.has(current)) {
                uniqueSet.add(current);
                resultArray.push(current);
            }
        }

        this.items = resultArray; // Update the stack with unique elements

        return this.items; // Return the unique array
    }

    // Count even numbers in the stack
     countEven() {
        let count = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] % 2 === 0) {
                count++;
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

   
        // Sort the stack using a temporary stack
        sortStack() {
            let tempStack = new stack();
    
            while (!this.isEmpty()) {
                // Pop the top element from the original stack
                let temp = this.pop();
    
                // While the temporary stack is not empty and the top
                // element is greater than the current element,
                // pop elements from the temporary stack and push them
                // back to the original stack
                while (!tempStack.isEmpty() && tempStack.peek() > temp) {
                    this.push(tempStack.pop());
                }
    
                // Push the current element into the temporary stack
                tempStack.push(temp);
            }
    
            // Transfer elements back to the original stack
            while (!tempStack.isEmpty()) {
                this.push(tempStack.pop());
            }
    
            return this.items; // Return the sorted stack
        }
    
    print(){
        console.log(this.items);  // .toString() => 11,22,33,44,55  converts the array into string format.
    }

}



const testStack = new stack();
const array = [1, 2, 3, 4, 5, 2, 4, 3, 10];
array.forEach((x) => testStack.push(x));

console.log("Original stack:");
testStack.print();

console.log("Peek:", testStack.peek());


console.log('UNique array without duplicates:');
let uniqueArray = testStack.removeDuplicates();
console.log(uniqueArray);

console.log('Reversed array:');
console.log(testStack.reverseStack());

console.log(testStack.countEven());

console.log(testStack.calculateEvenSum());


console.log(testStack.sortStack());
