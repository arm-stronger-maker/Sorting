const tail = require('../Practice/one')

class stackUsingTail{
    constructor(){
        this.stack = new tail();
    }

    isEmpty(){
        return this.stack.isEmpty()
    }

    getSize(){
        return this.stack.getSize()
    }

    push(value){
        this.stack.prepend(value)
    }

    pop(){
        return this.stack.removeFromFront();
    }

    peek(){
        return this.stack.head.value;
    }

    print(){
        return this.stack.print()
    }
}

const stackIs  = new stackUsingTail()

stackIs.push(30)
stackIs.push(20)
stackIs.push(10)

stackIs.pop()

stackIs.print()

console.log(stackIs.peek());
