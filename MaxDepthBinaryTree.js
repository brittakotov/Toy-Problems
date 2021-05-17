Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let depth = 0;

  if (!root) {
      return depth;
  }

  function traverse(node, currDepth) {
      currDepth++;
      depth = Math.max(currDepth, depth);

      if (node.left) {
          traverse(node.left, currDepth)
      }
      if (node.right) {
           traverse(node.right, currDepth)
      }
  }

  traverse(root, 0)
  return depth;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if (!root) {
      return 0;
  }
  let queue = [];
  queue.push(root);
  let depth = 0;
  while (queue.length > 0) {
      let levelSize = queue.length;
      depth++;
      for (let i = 0; i < levelSize; i++) {
          let current = queue.shift();
          if (current.left) {
            queue.push(current.left)
           }

          if (current.right) {
            queue.push(current.right)
         }
      }
  }
  return depth;
};