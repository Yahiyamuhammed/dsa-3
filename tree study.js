class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
 insert(value){
    const newNode=new Node(value)
    if(!this.root) {
        this.root=newNode
        return true
    }
    let node=this.root
    while(node){
        if(value==node.value) return false
        if(value<node.value){
            if(!node.left){
                node.left=newNode
                return true
            }
            node=node.left
        }else{
            if(!node.right){
                node.right=newNode
                return true
            }
            node=node.right
        }
    }
 }
  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
  postorder(node = this.root) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
  delete(target, node = this.root) {
    if (!node) return null;
    if (target < node.value) node.left= this.delete(target, node.left);
    else if (target > node.value) node.right=this.delete(target, node.right);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const min=this.minNode(node.right)
      node.value=min.value
      node.right=this.delete(min.value,node.right)
    }
    return node
  }
  minNode(node){
    while(node.left) node=node.left
    return node
  }
  closest(target) {
    let current = this.root;
    let closest = current.value;
    while (current) {
      if (Math.abs(target - closest) > Math.abs(target - current.value))
        closest = current.value;
      current = target < current.value ? current.left : current.right;
    }
    console.log(closest);
  }
  findHeight(node = this.root) {
    if (!node) return 0;
    let leftHeight = this.findHeight(node.left);
    let rightHeight = this.findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  isValid(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true;
    if (node.value <= min || node.value >= max) return false;
    return (
      this.isValid(node.left, min, node.value) &&
      this.isValid(node.right, node.value, max)
    );
  }
  contains(target) {
    let current = this.root;
    while (current) {
      if (current.value == target) return true;
      current.value < target
        ? (current = current.right)
        : (current = current.left);
    }
    return false;
  }
}
const tree = new Bst();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);
tree.preOrder();
// tree.inorder()
// tree.postorder()
console.log("--------");
tree.delete(10);
tree.preOrder();
console.log("--------");
tree.closest(12);
console.log(tree.findHeight());
console.log(tree.isValid());
console.log(tree.contains(6));
