class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueTest{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0
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
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            throw new Error('RangeError: Queue is Empty')
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


    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        } 
        let removeValue;
        if(this.size === 1){
            removeValue = this.head;
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            removeValue = this.tail;
            curr.next = null;  // curr.next dhan kudukanaum.
            this.tail = curr;
        }
        this.size--;
        return removeValue;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty');
        }
        let listedValues = ''
        let curr = this.head;
        while(curr){
            listedValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listedValues);
        
    }
}


const queue = new QueueTest()
queue.prepend(30)
queue.prepend(20)
queue.prepend(10)

queue.append(40)
queue.append(50)

queue.removeFromFront()
queue.removeFromEnd()

queue.print()