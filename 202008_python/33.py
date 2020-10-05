from typing import List


# Brute Force
# class Solution:
#     def search(self, nums: List[int], target: int) -> int:
#         if target in nums:
#             return nums.index(target)
#         else:
#             return -1

# mine binary trying:
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            # print(f'l:{left}, r:{right}')
            mid = (left + right) // 2
            # ending criteria:
            if nums[mid] == target:
                return mid

            # judge the array have or don't have the pivot point inside, by comparing if nums[last] > nums[first]

            if nums[mid] >= nums[left]:
                # left half is ascending
                if nums[left] <= target < nums[mid]:
                    # target at left
                    right = mid - 1
                else:
                    # target at right
                    left = mid + 1
            # right half is ascending
            else:
                if nums[mid] < target <= nums[right]:
                    # target at right
                    left = mid + 1
                else:
                    right = mid - 1

        return -1


test_instance = Solution()
assert (test_instance.search([3, 4, 5, 6, 7, 0, 1], 2) == -1)
assert (test_instance.search([4, 5, 6, 7, 0, 1, 2], 0) == 4)
assert test_instance.search([3, 1], 1) == 1
print('test done')
