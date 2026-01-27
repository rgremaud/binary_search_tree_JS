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

  insert(value, root = this.root) {
    if (root === null) {
      return root = new Node(value);
    }

    if (value < root.value) {
      root.left = this.insert(value, root.left)
    } else {
      root.right = this.insert(value, root.right)
    }

    return root
  }

  deleteItem(value, root = this.root) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteItem(value, root.left);
    } else if (value > root.value) {
      root.right = this.deleteItem(value, root.right);
    } else {
      // Leaf node or 1 child
      if (root.left === null) {
        return root.right
      }
      if (root.right === null) {
        return root.left
      }

      // node w/2 children 
      const successor = this.getSuccessor(root);

      root.value = successor.value;
      root.right = this.deleteItem(successor.value, root.right);
    }

    return root
  }

  getSuccessor(node) {
    let currentNode = node.right;

    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left
    }

    return currentNode;
  }

  find(value, root = this.root) {
    // exit condition if value not found
    if (root === null) return null

    // exit condition if value found
    if (root.value === value) return root;

    // traverse the tree
    if (value < root.value) {
      root = this.find(value, root.left)
    } else if (value > root.value) {
      root = this.find(value, root.right)
    }

    return root
  }

  levelOrderForEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error("Callback function required as input");
    }

    const levelOrderArray = [];
    const queue = [];

    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length !== 0) {
      callback(currentNode.value, levelOrderArray)
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      queue.splice(0, 1);
      currentNode = queue[0];
    }

    return levelOrderArray;
  }

  storeValue(value, array) {
    array.push(value);
  }

  /*
  Write inOrderForEach(callback), preOrderForEach(callback), and postOrderForEach(callback) 
  functions that also accept a callback as a parameter. Each of these functions 
  should traverse the tree in their respective depth-first order and pass each node
   to the provided callback. The functions should throw an Error if no callback is given as an argument, 
   like with levelOrderForEach.
   */

  /*
  Write a height(value) function that returns the height of the node containing 
  the given value. Height is defined as the number of edges in the longest path from 
  that node to a leaf node. If the value is not found in the tree, the function should return null.
 */

  // function works for height of actual tree - not individual nodes
  heightTree(root = this.root, value = "") {
    if (root === null) {
      return -1;
    }

    // compute the height of left and right subtrees
    let lHeight = this.heightTree(root.left);
    let rHeight = this.heightTree(root.right);

    if (root.value === value) {
      console.log("this fired")
      return Math.max(lHeight, rHeight) + 1;
    }

    return Math.max(lHeight, rHeight) + 1;
  }

  height(root = this.root, value) {
    let height = { value: -1 }; // Using an object 
    // to store height by reference
    this.findHeightUtil(root, value, height);
    return height.value;
  }

  findHeightUtil(root, value, height) {
    if (!root) return -1;

    // Store the maximum height of left and right subtree
    let leftHeight = this.findHeightUtil(root.left, value, height);
    let rightHeight = this.findHeightUtil(root.right, value, height);

    // Update height of the current node
    let ans = Math.max(leftHeight, rightHeight) + 1;

    // If current node is the required node, update height
    if (root.data === value) height.value = ans;

    return ans;
  }

  /*
  Write a depth(value) function that returns the depth of the node containing the 
  given value. Depth is defined as the number of edges in the path from that node 
  to the root node. If the value is not found in the tree, the function should return null.
 */

  /*
  Write an isBalanced function that checks if the tree is balanced. A binary tree is 
  considered balanced if, for every node in the tree, the height difference between its 
  left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.
 
  Write a rebalance function that rebalances an unbalanced tree. 
  Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
 */

}