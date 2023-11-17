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
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    let curr = this.root

    while (true) {
      if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new Node(val)
          return this
        } else {
          curr = curr.right
        }
      } else if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val)
          return this
        } else {
          curr = curr.left
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr = this.root) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    if (val > curr.val) {
      if (curr.right === null) {
        curr.right = new Node(val)
        return this
      } else {
        return this.insertRecursively(val, curr.right)
      }
    } else if (val < curr.val) {
      if (curr.left === null) {
        curr.left = new Node(val)
        return this
      } else {
        return this.insertRecursively(val, curr.left)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    let curr = this.root

    while (curr) {
      if (val > curr.val) {
        curr = curr.right
      } else if (val < curr.val) {
        curr = curr.left
      } else {
        return curr
      }
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    if (!curr) { return undefined }

    if (val > curr.val) {
      return this.findRecursively(val, curr.right)
    } else if (val < curr.val) {
      return this.findRecursively(val, curr.left)
    } else {
      return curr
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = []
    let curr = this.root

    function travel(node) {
      visited.push(node.val)
      node.left && travel(node.left)
      node.right && travel(node.right)
    }

    travel(curr)
    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = []
    let curr = this.root

    function travel(node) {
      node.left && travel(node.left)
      visited.push(node.val)
      node.right && travel(node.right)
    }

    travel(curr)
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = []
    let curr = this.root

    function travel(node) {
      node.left && travel(node.left)
      node.right && travel(node.right)
      visited.push(node.val)
    }

    travel(curr)
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let curr = this.root
    let queue = [curr]
    let visited = []


    while (queue.length) {
      curr = queue.shift()
      visited.push(curr.val)

      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }

    return visited



  }

}

module.exports = BinarySearchTree;
