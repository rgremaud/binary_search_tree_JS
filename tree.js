import { Node } from "./node.js"

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

    insert(value, root=this.root) {
        if ( root === null ) {
          return root = new Node(value);
        }
        
        if ( value < root.value ) {
          root.left = this.insert(value, root.left)
        } else {
          root.right = this.insert(value, root.right)
        }

        return root
    }
    // works for 0 and 1 children nodes
    deleteItem(value, root=this.root) {
      if ( root === null ) {
        return root;
      }

      if ( value < root.value ) {
        root.left = this.deleteItem(value, root.left);
      } else if ( value > root.value ) {
        root.right = this.deleteItem(value, root.right);
      } else {
        // Leaf node or 1 child
        if ( root.left === null ) { 
          return root.right
        }
        if ( root.right === null ) {
          return root.left
        }

        // node w/2 children
        const successor = this.getSuccessor(root);
        root.value = successor.value;
        root.right = this.deleteItem(root.right, successor.value);
      }
      
      return root
    }

    // pulls inorder successor - the smallest value in the right subtree aka the next highest value from removed node
    // doesnt work
    getSuccessor(node) {
      let currentNode = node.right

      while (currentNode !== null && currentNode.left !== null) { 
        currentNode = currentNode.left
      }

      return currentNode;
    }

    /*
    Write a find(value) function that returns the node with the given value.
    */

    find(value, root=this.root) { 
      
      // if node.value === value then return node
      if ( root.value === value) return root;
      // if value < root
      if ( value < root.value ) {
        root.left = this.find(value, root.left)
      } else {
        root.right = this.find(value, root.right)
      }
      
      return root
    }

    /*
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