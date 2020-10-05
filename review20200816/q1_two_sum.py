from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # create a dict, with nums value as key, and the position in nums as value
        solution_dict = {}
        for i in range(len(nums)):
            # print (target - nums[i])
            if ((target - nums[i]) in solution_dict.keys()):
                return [i, solution_dict[target - nums[i]]]
            else:
                solution_dict[nums[i]] = i


TestInstance = Solution()

# print(TestInstance.twoSum([2, 7, 11, 15], 9))
