import { Tree } from "./tree.js"

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
const array = tree.array
tree.buildTree(array);

const root = tree.root

tree.prettyPrint(root)

tree.deleteItem(8)

const root2 = tree.root

tree.prettyPrint(root2)

// const node = tree.find(4)
// console.log(node)

