import { Tree } from "./tree.js"

function UserInterface() { 
    const getRandomInt = function (min, max) {
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

    function treeInit(size) {
        const array = createTree(10);
        const tree = new Tree(array);

        tree.buildTree(array);
        
        const root = tree.root

        tree.prettyPrint(root);

        // confirm tree is balanced
        console.log("Tree balance: " + tree.isBalanced());

        // add new nodes over 100
        tree.insert(getRandomInt(100, 1000), root)
        tree.insert(getRandomInt(100, 1000), root)
        tree.insert(getRandomInt(100, 1000), root)

        tree.prettyPrint(root);
        console.log("Tree balance: " + tree.isBalanced());

        tree.rebalance();
        tree.prettyPrint(tree.root);
        console.log("Tree balance: " + tree.isBalanced());
    }
}
treeInit(10);