// Node class for the BST
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST class
class BST {
    constructor() {
        this.root = null;
    }

    // ----------------- INSERT -----------------
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined; // No duplicates
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // ----------------- CONTAINS -----------------
    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }

    // ----------------- DELETE -----------------
    _findMinNode(node) {
        while (node.left) node = node.left;
        return node;
    }

    delete(value, node = this.root) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            // Node found
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const temp = this._findMinNode(node.right);
            node.value = temp.value;
            node.right = this.delete(temp.value, node.right);
        }
        return node;
    }

    // Optional wrapper for deleting root
    remove(value) {
        this.root = this.delete(value, this.root);
    }

    // ----------------- TRAVERSALS -----------------
    inorder(node = this.root, result = []) {
        if (node) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    preorder(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    postorder(node = this.root, result = []) {
        if (node) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // ----------------- FIND CLOSEST -----------------
    findClosest(target) {
        let current = this.root;
        let closest = current.value;

        while (current) {
            if (Math.abs(target - closest) > Math.abs(target - current.value)) {
                closest = current.value;
            }
            current = target < current.value ? current.left : current.right;
        }

        return closest;
    }

    // ----------------- VALIDATE BST -----------------
    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) return false;
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }
}

// ----------------- EXAMPLE USAGE -----------------
const tree = new BST();

// Insert values
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);

console.log("Inorder traversal:", tree.inorder());     // [2,5,7,10,12,15,17]
console.log("Preorder traversal:", tree.preorder());   // [10,5,2,7,15,12,17]
console.log("Postorder traversal:", tree.postorder()); // [2,7,5,12,17,15,10]

console.log("Contains 7?", tree.contains(7));          // true
console.log("Contains 9?", tree.contains(9));          // false

console.log("Closest to 6:", tree.findClosest(6));     // 5 or 7 (whichever is closer)

tree.remove(15);                                       
console.log("After deleting 15, inorder:", tree.inorder()); // [2,5,7,10,12,17]

console.log("Is BST?", tree.isBST());                 // true
