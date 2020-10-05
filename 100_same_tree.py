# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        # Two empty node:
        if not p and not q:
            return True
        # One empty node:
        if (p and not q) or (not p and q):
            return False
        # End node with same value
        if not p.left and not p.right and not q.left and not q.right and p.val == q.val:
            return True
        if p.val != q.val:
            return False
        else:
            # Two nodes do not have same branch
            if (p.left and not q.left) or (p.right and not q.right) or (not p.left and q.left) or (not p.right and q.right):
                return False
            # Two nodes have same branche, compare each one separately
            res = True
            if p.left and q.left:
                res = res and self.isSameTree(p.left, q.left)
            if p.right and q.right:
                res = res and self.isSameTree(p.right, q.right)
            return res


solution = Solution()

c = TreeNode(3)
d = TreeNode(4)

node_a = TreeNode(1, c, d)
node_b = TreeNode(1, c, d)

# print(solution.isSameTree(node_a, node_b))
assert(solution.isSameTree(node_a, node_b) == True)
assert(solution.isSameTree(node_a, c) == False)
