from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid

            # test if left side is monoincrease (pivot point on right)
            if nums[left] <= nums[mid]:
                # it is, then check if the target is in there
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            # right side is monoincrease (pivot point on left)
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1


test_instance = Solution()
assert (test_instance.search([3, 4, 5, 6, 7, 0, 1], 2) == -1)
assert (test_instance.search([4, 5, 6, 7, 0, 1, 2], 0) == 4)
assert test_instance.search([3, 1], 1) == 1
# assert test_instance.search([3, 1, 2], 1) == 1
assert test_instance.search([1, 3], 1) == 0
print('test done')
