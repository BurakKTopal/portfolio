class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null; 
    }

    getValue() {
        return this.value;
    }

    getPrevNode() {
        return this.prevNode;
    }

    getNextNode() {
        return this.nextNode;
    }

    setNextNode(node) {
        this.nextNode = node;
    }

    setPrevNode(node) {
        this.prevNode = node;
    }
}

export default Node;