/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
 * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0;

    function countNumOfNodesToLeaf(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return countNumOfNodesToLeaf(node.right) + 1;
      if (node.right === null) return countNumOfNodesToLeaf(node.left) + 1;

      return Math.min(countNumOfNodesToLeaf(node.left), countNumOfNodesToLeaf(node.right)) + 1
    }

    return countNumOfNodesToLeaf(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;

    function countNumOfNodesToLeaf(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return countNumOfNodesToLeaf(node.right) + 1;
      if (node.right === null) return countNumOfNodesToLeaf(node.left) + 1;

      return Math.max(countNumOfNodesToLeaf(node.left), countNumOfNodesToLeaf(node.right)) + 1; //we want the maximum number for all the nodes on the left hand side, and all the nodes on the right hand side
    }

    return countNumOfNodesToLeaf(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the 
   * tree. The path doesn't need to start at the root, but you can't visit a node more 
   * than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;

      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);

      result = Math.max(result, node.val + leftSum + rightSum);

      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);

    return result;
  }

}