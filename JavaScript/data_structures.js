
class Stack {
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }
    push(item){
        this.dataStore[this.top] = item;
        this.top++
    }
    pop(){
        this.dataStore.pop();
        this.top--
    }
    display(){
        for (item of this.dataStore){
            console.log(item);
        }
    }
}

// module.exports = Stack;

// var Stack = ( () => {
//     function Stack(){
//         this.dataStore = [];
//         this.top = 0;
//     }
//     Stack.prototype.push = function(item) {
//         this.dataStore.push(item);
//         this.top = item;
//     }
//     Stack.prototype.pop = function() {
//         this.dataStore.pop();
//         this.top = this.dataStore[this.dataStore.length-1];
//     }
//     Stack.prototype.display = function() {
//         for (item of this.dataStore){
//             console.log(item);
//         }
//     }
//     return Stack;
// })();



class Queue {
    constructor(){
        this.dataStore = [];
        this.back = 0;
    }
    enqueue(item){
        this.dataStore[this.back] = item;
        this.back++;
    }
    dequeue(){
        let output = this.dataStore[0];
        for(let i=1; i<this.dataStore.length; i++){
            this.dataStore[i-1] = this.dataStore[i];
        }
        this.dataStore.pop();
        this.back--;
        return output;
    }
    display(){
        for(let item of this.dataStore) console.log(item);
    }
}
// module.exports = Queue;



class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(node){
        this.head = new Node('head');
    }
    find(element){
        let runner = this.head;
        while (runner.element != element && runner.next != null){
            runner = runner.next;
        }
        return runner;
    }
    insert(newElement, element){
        let prior = this.find(element);
        let newNode = new Node(newElement);
        newNode.next = prior.next;
        prior.next = newNode;
    }
    display(){
        let runner = this.head;
        while (runner.next != null){
            runner = runner.next;
            console.log(runner.element);
        }
    }
    findPrior(element){
        let runner = this.head;
        while (runner.next.element != element && runner.next != null){
            runner = runner.next;
        }
        return runner;
    }
    remove(element){
        let prior = this.findPrior(element);
        let temp = prior.next.next;
        prior.next.next = null;
        prior.next = temp;
    }
}
