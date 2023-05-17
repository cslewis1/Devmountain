class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node != null) {
      count++;
      node = node.next;
    }
    return count;
    }
    
    isEmpty() {
        return this.head === null;
    }

    getLast() {
        return this.tail
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;        
    }

    addToBack(node) {
        this.tail.next = node;
        this.tail = node;
    }
}

let list = new LinkedList();

let vinson = new Node("vinson");

list.head = vinson;
list.tail = vinson;

let ben = new Node("Ben");

//head -> neaka -> ben <- tail
vinson.next = ben;
list.tail = ben;

let latisha = new Node("Latisha");

vinson.next.next = latisha;
list.tail = latisha;

let dionte = new Node("Dionte");
vinson.next.next.next = dionte;
list.tail = dionte;

//Get Latisha by using the first value
console.log(vinson.next.next.value);
//Get Latisha by using the list
console.log(list.head.next.next.value);

console.log(list.size())
console.log(list.isEmpty())

let last = getLast()
console.log(last.value)

