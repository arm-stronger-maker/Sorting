class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linked{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }


    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = null;
            this.tail = null;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }


    removeFront(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head = null;
            this.tail = null;
        }else{
            removeValue = this.head;
            this.head = removeValue.next;
        }
        this.size--
        return removeValue;
    }

    removeEnd(){
        if(this.isEmpty()){
            throw new Error('Stack underflow')
        }
        let removeValue;
        if(this.size===1){
            removeValue = this.tail;
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            while(curr !== this.tail){
                curr = curr.next;
            }
            removeValue = this.tail;
            curr.next = null;
            this.tail = curr;
        }
        this.size--
        return removeValue;
    }

    print(){
        if(this.isEmpty()){
            console.log('Empty List');
        }
        let curr = this.head;
        let listedValues = ''
        for(let i=0; i<this.size; i++){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
    }
}

const testLL = new Linked()
testLL.prepend(30)
testLL.prepend(20)
testLL.prepend(10)

testLL.append(40)
testLL.append(50)

testLL.removeFront()
testLL.removeEnd()


testLL.print()