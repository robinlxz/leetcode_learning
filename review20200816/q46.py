from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.helper([], nums, res)
        return res

    def helper(self, current, remain, result):
        if remain == []:
            result.append(current)
        else:
            for i in range(len(remain)):
                self.helper(current+[remain[i]],
                            remain[:i]+remain[i+1:], result)


solution = Solution()

# print(solution.permute([1, 2]))
print(solution.permute([1, 2, 3]))
