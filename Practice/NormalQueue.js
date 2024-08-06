class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail =null;
        this.size = 0
    }

    isEmpty(){
      return this.size === 0
    }

    getSize(){
        return this.size
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
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        } 
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            throw new Error('Stack UnderFlow error')
        }
        let removeNode;
        if(this.size === 1){
            removeNode = this.head;
            this.head= null;
            this.tail = null;
        } else {
            removeNode = this.head;
            this.head = removeNode.next; 
        }
        this.size--
        return removeNode;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            throw new Error('Stack UnderFlow')
        }
        let removeNode;
        if(this.size === 1){
            removeNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            removeNode = this.tail;
           curr.next = null;
            this.tail = curr;
        }
        this.size--
        return removeNode
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        }
        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next;
        }
        console.log(listedValues);
        
    }
}

const queueTest = new Queue()

queueTest.prepend(30)
queueTest.prepend(20)
queueTest.prepend(10)

queueTest.append(40)
queueTest.append(50)

queueTest.removeFromFront()
queueTest.removeFromEnd()

queueTest.print()