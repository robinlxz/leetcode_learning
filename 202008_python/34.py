'''
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
'''
from typing import List

# Brute force
# class Solution:
#     def searchRange(self, nums: List[int], target: int) -> List[int]:
#         if target not in nums:
#             return [-1, -1]
#         else:
#             start_pos = nums.index(target)
#             end_pos = start_pos
#             while end_pos + 1 < len(nums) and nums[end_pos + 1] == target:
#                 end_pos += 1
#             return [start_pos, end_pos]


# Binary
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) - 1
        # start_pos, end_pos = -1, -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return self.find_start_end(nums, target, mid)
            if nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1

        return [-1, -1]

    def find_start_end(self, nums, target, mid) -> List[int]:
        start_pos, end_pos = mid, mid
        while start_pos > 0 and nums[start_pos - 1] == target:
            start_pos -= 1
        while end_pos < len(nums) - 1 and nums[end_pos + 1] == target:
            end_pos += 1
        return [start_pos, end_pos]


test_instance = Solution()
assert (test_instance.searchRange([5, 7, 7, 8, 8, 10], 8) == [3, 4])
print(test_instance.searchRange([5, 7, 7, 8, 8, 8], 8))
print('test done')
