/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  findObjDFS(objVal) {
    const stack = [this]

    while (stack.length) {
      const currentObj = stack.pop()

      if (currentObj.val === objVal) {
        return currentObj
      }

      for (let childObj of currentObj.children) {
        stack.push(childObj)
      }
    }
  }

  findObjBFS(objVal) {
    const queue = [this]

    while (queue.length) {
      const currentObj = queue.shift()

      if (currentObj.val === objVal) {
        return currentObj
      }

      for (let childObj of currentObj.children) {
        queue.push(childObj)
      }
    }
  }

  findNumsTotalBFS() {
    let total = 0
    const queue = [this]

    if (queue[0].val === undefined) {
      return 0
    }

    while (queue.length) {
      const currentObj = queue.shift()
      total += currentObj.val

      for (let childObj of currentObj.children) {
        queue.push(childObj)
      }
    }

    return total
  }

  findTotalEvenNumsBFS() {
    let total = 0
    const queue = [this]

    while (queue.length) {
      const currentObj = queue.shift()

      if (currentObj.val % 2 === 0) {
        total += currentObj.val
      }

      for (let childObj of currentObj.children) {
        queue.push(childObj)
      }
    }

    return total
  }

  findTotalObjsGreaterThanNumBFS(num) {
    let total = 0
    const queue = [this]

    while (queue.length) {
      const currentObj = queue.shift()

      if (currentObj.val > num) {
        total += 1
      }

      for (let childObj of currentObj.children) {
        queue.push(childObj)
      }
    }

    return total
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) {
      return 0
    }
    return this.root.findNumsTotalBFS()
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.root.findTotalEvenNumsBFS()
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    return this.root.findTotalObjsGreaterThanNumBFS(lowerBound)
  }
}

module.exports = { Tree, TreeNode };

