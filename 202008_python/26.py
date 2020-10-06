from typing import List

# This is a downvoted problem


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # return len(set(nums))
        if not nums:
            return 0
        for (i, num) in enumerate(nums):
            if i == 0:
                pass
            if num == nums[i - 1]:
                nums.pop(i)
        return len(nums)


solution = Solution()

input = [1, 1, 2]
print(solution.removeDuplicates(input))
print(input)
