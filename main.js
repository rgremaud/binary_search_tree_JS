import { Tree } from "./tree.js"

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
const array = tree.array
tree.buildTree(array);
// sorted array = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
// length = 11, mid = 8
/* Tree:      
                   8
                  / \
                4

*/
const root = tree.root

tree.prettyPrint(root);

