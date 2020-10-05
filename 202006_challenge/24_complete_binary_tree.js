// Given a complete binary tree, count the number of nodes.
// https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3369/

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
var countNodes = function (root) {
  if (root.val == null || 0) {
    return 0;
  } else if (root.left == null || 0) {
    return 1;
  } else if (root.right == null || 0) {
    return 2;
  } else {
    return countNodes(root.left) + countNodes(root.right);
  }
};
