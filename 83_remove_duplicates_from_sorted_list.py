# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head and head.next:
            result = ListNode(head.val, head.next)
        else:
            return head
        current = result
        # while current.next != None: # Submission failed with this, current.next may not exist. AttributeError: 'NoneType' object has no attribute 'val'
        while current and current.next:
            if current.next.val != current.val:
                current = current.next
            else:
                current.next = current.next.next
        return result


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
