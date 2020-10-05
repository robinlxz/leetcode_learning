from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result_dict = {}
        for num in nums:
            if num in result_dict:
                result_dict[num] += 1
            else:
                result_dict[num] = 1
        for key in result_dict.keys():
            if result_dict[key] == 1:
                return key
