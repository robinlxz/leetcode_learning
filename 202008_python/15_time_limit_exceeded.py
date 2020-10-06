from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        for (i, num) in enumerate(nums):
            self.one_plus_two_to_zero(num, nums[i+1:], res)
        # res_sorted = [sorted(i) for i in res]
        # res_final = []
        # for list_of_three in res_sorted:
        #     if list_of_three not in res_final:
        #         res_final.append(list_of_three)
        # return list(res_final)
        return res

    def one_plus_two_to_zero(self, first: int, rest_nums: List, res: List):
        for (i, num) in enumerate(rest_nums):
            if - (first + num) in rest_nums[i+1:]:
                list_of_three = sorted([first, num, -(first + num)])
                if list_of_three not in res:
                    res.append(list_of_three)


s_instance = Solution()

# res = []
# s_instance.one_plus_two_to_zero(2, [-1, 0, 1, 2, -1, -4], res)
# print(res)

print(s_instance.threeSum([-1, 0, 1, 2, -1, -4]))
