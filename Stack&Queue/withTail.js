// It calls indefinitely. At somePoint it returns a "range Error" due to reaches its maximum call stack size.

/*
function recursionCalls(n){
    console.log(n);
    recursionCalls(n+1)
}

try{
    recursionCalls(1);
}catch(error){
    console.log('RangeError: ', error);
    
}
*/



class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class withTail{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else {
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
            return;
        }
        let removeValue;
        if(this.size === 1) {
            removeValue = this.head;
            this.head = null;
            this.tail = null;
        }else {
            removeValue = this.head;
            this.head = removeValue.next;
        }
        this.size--
        return removeValue;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return;
        } 
        let removeValue;
        if(this.size === 1){
            listedValues = this.tail;
            this.head = null;
            this.tail = null;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            removeValue = this.tail;
            curr.next = null;  // curr.next ==== this.tail. we assign a value of null to this.tail. => this.tail = null; Adhukaaga this.tail = null nu kudukka kudadhu. curr.next = null; 
            this.tail = curr;
        }
        this.size--
        return removeValue;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty');
        } else {  
            let listedValues = ''
            let curr = this.head;
            while(curr.next !== null) {
                listedValues += `${curr.value} `
                curr = curr.next;
            }
            listedValues += curr.value
            console.log(listedValues);
    }
  }
}


module.exports = withTail;
/*

const testTail = new withTail();

testTail.prepend(30)
testTail.prepend(20)
testTail.prepend(10)

testTail.append(40)
testTail.append(50)

testTail.removeFromFront()
testTail.removeFromEnd()


testTail.print()

*/