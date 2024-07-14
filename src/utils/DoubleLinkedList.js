import Node from "./Node";
// Small implementation of a double linked list to switch between different notepads

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addHead(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNextNode(this.head);
            this.head.setPrevNode(newNode);
            this.head = newNode;
        }
    }

    addTail(value) {
        let newNode = new Node(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setPrevNode(this.tail);
            this.tail.setNextNode(newNode);
            this.tail = newNode;
        }
    }
}

export default DoubleLinkedList;