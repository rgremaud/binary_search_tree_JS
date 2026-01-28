import { Tree } from "./tree.js"

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// const array = tree.array
// tree.buildTree(array);

// const root = tree.root;

// tree.prettyPrint(root);
// console.log(tree.heightTest(8));
// console.log(tree.depth(root, 6345));
// console.log(tree.rebalance());

// const traversal = tree.levelOrderForEach(tree.storeValue);
// const traversalLog = tree.levelOrderForEach(value => console.log(value));
// console.log(traversal);

// tree.preOrderForEach(root, value => console.log(value));
// tree.postOrderForEach(root, value => console.log(value));
// tree.inOrderForEach(root, value => console.log(value));

/*
Write a driver script that does the following:

Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
Confirm that the tree is balanced by calling isBalanced.
Print out all elements in level, pre, post, and in order.
Unbalance the tree by adding several numbers > 100.
Confirm that the tree is unbalanced by calling isBalanced.
Balance the tree by calling rebalance.
Confirm that the tree is balanced by calling isBalanced.
Print out all elements in level, pre, post, and in order.
*/

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

function createTree(numberOfNodes) { 
    const nodeArray = [];
    for (let i = 0; i < numberOfNodes; i++) {
        const number = getRandomInt(0, 100);
        nodeArray.push(number)
    }

    return nodeArray;
}

function buildTree(size) {
    const array = createTree(10);
    const tree = new Tree(array);

    tree.buildTree(array);
    
    const root = tree.root

    tree.prettyPrint(root);
}

buildTree(10);