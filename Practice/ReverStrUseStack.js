class Stack{
    constructor(){
        this.array = []
    }

    isEmpty(){
        return this.array.length == 0
    }

    add(value){
        this.array.push(value)
    }

    remove(){
        if(this.isEmpty()){
            return new Error('Underflow error')
        }
        return this.array.pop()
    }
}


function reverseStr(string){
    let stack = new Stack();

    for(let i=0; i<string.length; i++){
        stack.add(string[i])
    }

    let Reverse = ''
    while(!stack.isEmpty()){
        Reverse+= stack.remove()
    }

    return Reverse
}

console.log(reverseStr('Ramankishore'));
