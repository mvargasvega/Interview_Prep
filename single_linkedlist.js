//singly linked list

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    insertNodeAtPosition(nodeData,position){
        const node = new SinglyLinkedListNode(nodeData);
        let currentNode = this.head;
        let count = 0;
        let previousNode;

        //if position is longer then the length, return error
        //else let find the value
        while(count < position){
            count++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = node;
        node.next = currentNode;
    }
    removeNodeAtPosition(position){
        let currentNode = this.head;
        let count = 0;
        let previousNode;

        while(count < position){
            count++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        return ("Removed value " + currentNode.data);
    }
    removeElementFromList(element){
        let count = 0;
        let currentNode = this.head;
        let previousNode;

        while(currentNode.next){
            count++;
            if(currentNode.data === element){
                previousNode.next = currentNode.next;
                return "It has been removed";
            }else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(currentNode.next === null){
                return "That value was not found in this list";
            }
        }
    }
    findElementAtPosition(index){
        let currentNode = this.head;
        let count = 0;

        while(count < index){
            count++;
            currentNode  = currentNode.next;
            if (currentNode.next = null){
                return "There is no element at this index";
            }
        }
        return currentNode.data;
    }
    lengthOfList(){
        let currentNode = this.head;
        let length = 1;
        //what happens when list is less than one.
        // if (currentNode.next === null){
        //     return length;
        // }
        while(currentNode.next){
            length++

            currentNode = currentNode.next;
        }
        return length;
    }
};

conga = new SinglyLinkedList();
conga.insertNode("e");
conga.insertNode("3");
conga.insertNode("5");
conga.insertNode("M");
conga.insertNode("54");
conga.insertNode("1025");
conga.insertNodeAtPosition("apple",2);
console.log(conga.lengthOfList());
conga.removeElementFromList("54");
// console.log(conga.removeNodeAtPosition(3));
// console.log(conga.lengthOfList());
// console.log(conga.removeNodeAtPosition(3));
// console.log(conga.lengthOfList());
// console.log(conga.removeNodeAtPosition(3));
// console.log(conga.lengthOfList());
// conga.findElementAtPosition(3);//"5"
// console.log(conga.findElementAtPosition(2));
// console.log(conga.lengthOfList());
//remove element
