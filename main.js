import { Tree } from "./tree.js"

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
const array = tree.array
tree.buildTree(array);

const root = tree.root;

tree.prettyPrint(root);
// console.log(tree.heightTest(8));
console.log(tree.depth(root, 6345));
console.log(tree.isBalanced(root));

// const traversal = tree.levelOrderForEach(tree.storeValue);
// const traversalLog = tree.levelOrderForEach(value => console.log(value));
// console.log(traversal);

// tree.preOrderForEach(root, value => console.log(value));
// tree.postOrderForEach(root, value => console.log(value));
// tree.inOrderForEach(root, value => console.log(value));
