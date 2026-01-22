import { Node } from "./node.js"
/*
Build a Tree class/factory which accepts an array when initialized. The Tree 
class should have a root attribute, which uses the return value of buildTree 
which you’ll write next.
*/
export class Tree {
    constructor(array) {
        this.array = this.trimArray(array);
        this.root = null;
    }

    trimArray(array) {
        const formattedArray = [...new Set(array)];
        formattedArray.sort((a, b) => a - b);

        return formattedArray;
    }

    sortedArrayToBSTRecur(array, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid]);

        // Divide from middle element
        root.left = this.sortedArrayToBSTRecur(array, start, mid - 1);
        root.right = this.sortedArrayToBSTRecur(array, mid + 1, end);

        this.root = root
        return root;
    }

    buildTree(array) {
        return this.sortedArrayToBSTRecur(array, 0, array.length - 1);
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    /*
    Write insert(value) and deleteItem(value) functions that insert/delete the given
     value. You’ll have to deal with several cases for delete, such as when a node 
     has children or not. If you need additional resources, check out these two 
     articles on inserting and deleting, or this video on BST inserting/removing 
     with several visual examples.

     */

    insert(value) {
        /*
            const node = this.root
            if key is smaller go left
            else if key is larger go right
            continue until you find an unoccupied spot that allows insertion as a new leaf w/o violating BST property 
        */
        const node = this.root;

        const newNode = new Node(value);

    }

    deleteItem(value) {

    }

    /*
    Write a find(value) function that returns the node with the given value.
    
    Write a levelOrderForEach(callback) function that accepts a callback function as
     its parameter. levelOrderForEach should traverse the tree in breadth-first level
    order and call the callback on each node as it traverses, passing the whole node
    as an argument, similarly to how Array.prototype.forEach might work for arrays. 
    levelOrderForEach may be implemented using either iteration or recursion 
    (try implementing both!). If no callback function is provided, throw an Error
    reporting that a callback is required. 
    
    Write inOrderForEach(callback), preOrderForEach(callback), and postOrderForEach(callback) 
    functions that also accept a callback as a parameter. Each of these functions 
    should traverse the tree in their respective depth-first order and pass each node
     to the provided callback. The functions should throw an Error if no callback is given as an argument, 
     like with levelOrderForEach.
    
     Write a height(value) function that returns the height of the node containing 
     the given value. Height is defined as the number of edges in the longest path from 
     that node to a leaf node. If the value is not found in the tree, the function should return null.
    
    
     Write a depth(value) function that returns the depth of the node containing the 
     given value. Depth is defined as the number of edges in the path from that node 
     to the root node. If the value is not found in the tree, the function should return null.
    
     Write an isBalanced function that checks if the tree is balanced. A binary tree is 
     considered balanced if, for every node in the tree, the height difference between its 
     left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.
    
     Write a rebalance function that rebalances an unbalanced tree. 
     Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
    */

}