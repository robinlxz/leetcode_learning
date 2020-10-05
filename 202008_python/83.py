class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head and head.next:
            new = ListNode(head.val, head.next)
        else:
            return head

        cur = new
        while cur and cur.next:
            while cur and cur.next and cur.val == cur.next.val:  # can be done with better logic
                cur.next = cur.next.next
            cur = cur.next
        return new


c = ListNode(2)
b = ListNode(1, c)
a = ListNode(1, b)


solution = Solution()
result = solution.deleteDuplicates(a)
# result = solution.deleteDuplicates([])

assert result.next.val == 2

print(result.val)
print(result.next.val)
# a is mutated, but solution is cur = head, instead of deep copy.
print(a.next.val)
# print(b.val)
# print(c.val)
