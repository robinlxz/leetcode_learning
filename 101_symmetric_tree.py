# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    '''
    def is_equal_node(self, node_a: TreeNode, node_b: TreeNode) -> bool:
        if not node_a and not node_b:
            return True
        elif not node_a or not node_b:
            return False
        elif node_a.val != node_b.val:
            return False
        else:
            return self.is_equal_node(node_a.left, node_b.left) and self.is_equal_node(node_a.right, node_b.right)
    '''

    def is_mirror_node(self, node_a: TreeNode, node_b: TreeNode) -> bool:
        if not node_a and not node_b:
            return True
        elif not node_a or not node_b:
            return False
        elif node_a.val != node_b.val:
            return False
        else:
            return self.is_mirror_node(node_a.left, node_b.right) and self.is_mirror_node(node_a.right, node_b.left)

    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        else:
            return self.is_mirror_node(root.left, root.right)


solution = Solution()

c = TreeNode(3)
b = TreeNode(2, c, None)
# a = TreeNode(1, b, c)
sym_c = TreeNode(1, c, c)

# node1 = TreeNode(0, c, c)
# node2 = TreeNode(0, b, b)

# assert solution.isSymmetric(node1) == True
# assert solution.isSymmetric(node2) == False

assert solution.is_mirror_node(c, c) == True
assert solution.is_mirror_node(b, b) == False
