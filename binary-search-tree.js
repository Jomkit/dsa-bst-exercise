class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if(!this.root){
      this.root = node;
      return this;
    }
    let currentNode = this.root;

    while(currentNode){
      if(node.val < currentNode.val){
        if(currentNode.left){
          currentNode = currentNode.left;
        }else {
          currentNode.left = node;
          return this;
        }
      }else {
        if(currentNode.right){
          currentNode = currentNode.right;
        }else {
          currentNode.right = node;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const node = new Node(val);

    if(!this.root){
      this.root = node;
      return this;
    }
    
    const recursion = (currNode) => {
      if(node.val < currNode.val){
        if(currNode.left==null){
          currNode.left = node;
          return;
        }
        recursion(currNode.left);
      }else{
        if(currNode.right==null){
          currNode.right = node;
          return;
        }
        recursion(currNode.right);
      }
    }

    recursion(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while(currentNode){
      if(currentNode.val === val) return currentNode;
      
      if(currentNode.val > val) {
        if(currentNode.left==null) return undefined;
        currentNode = currentNode.left;
      } else{
        if(currentNode.right==null) return undefined;
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const recursion = (currNode) => {
      if(currNode == null) return undefined;
      if(currNode.val === val) return currNode;

      if(currNode.val > val){
        return recursion(currNode.left);
      }else{
        return recursion(currNode.right);
      }
    }
    return recursion(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    function traverse(node){
      result.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      return;
    }
    traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      result.push(node.val);
      if(node.right) traverse(node.right);
      return;
    }
    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.val);
      return;
    }
    traverse(this.root);
    return result;    
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const bfsQueue = [this.root];
    const result = [];

    let currentNode;
    while(bfsQueue.length){
      currentNode = bfsQueue.shift();
      result.push(currentNode.val);
      if(currentNode.left) bfsQueue.push(currentNode.left);
      if(currentNode.right) bfsQueue.push(currentNode.right);
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    const findSuccessor = (node) => {
      let min = node.val;
      while(node.left != null){
        min = node.left.val;
        node = node.left;
      }
      return min;
    }
    const removeRecursively = (node, val) => {
      if(node == null) return node;

      if(val < node.val){
        node.left = removeRecursively(node.left, val);
      } else if(val > node.val) {
        node.right = removeRecursively(node.right, val);
      } else {
        if(node.left == null) {
          return node.right;
        } else if(node.right == null){
          return node.left;
        }

        node.val = findSuccessor(node.right);
        node.right = removeRecursively(node.right, node.val);
      }
      return node;
    }

    return removeRecursively(this.root, val);
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
