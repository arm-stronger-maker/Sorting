// Reverse a string using stack implementation.

class Stack{
    constructor(){
        this.items = []
    }

    add(value){
        this.items.push(value);
    }

    remove(){
        if(this.isEmpty()){
            throw new Error('Underflow error')
        }
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }
}

   function reverseString(string){
        let stack = new Stack()  // should choose different variable name to prevent errors. don't use stack = new stack() like this. both 's' are small.
        
        // Push all characters of the given string.
        for(let i=0; i<string.length; i++){
            stack.add(string[i])
        }

        // Pop all elements using pop() method and store it a seperate variable.
        let reverseStr = ''
       while(!stack.isEmpty()) {
             reverseStr += stack.remove();
       }
        return reverseStr;
  }



let strings = 'RamanKishore'
let result = reverseString(strings)
console.log(result);


