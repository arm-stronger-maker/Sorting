const withTail = require('./withTail');

class stackPractice{
    constructor(){
        this.list = new withTail();
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    peek(){
        return this.list.head.value;
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront()
    }

    print(){
        return this.list.print()
    }
}


const stackTest = new stackPractice()

stackTest.push(30)
stackTest.push(20)
stackTest.push(10)

stackTest.pop()
stackTest.pop()
stackTest.pop()

stackTest.print()