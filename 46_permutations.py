from typing import List


class Solution:
    all_result = []
    # Does it have to be solved with global variable?
    # No, just need one more para for all_result in helper function

    def permute(self, nums: List[int]) -> List[List[int]]:
        # l = len(nums)
        # pass
        # result = []
        # result.append(self.helper([], nums))
        self.all_result = []
        self.helper([], nums)
        return self.all_result

    def helper(self, current, left):
        # print(f'current: {current}')
        # print(f'left: {left}')
        if left == []:
            # not working as intended. (as it didn't clear the parents {current}?) (!!Solution: do not mutate input paras for function!!)
            # result = current.copy()
            # current = []
            # print(f'result: {result}')
            self.all_result.append(current)
        else:
            # print(f'left: {left}')
            for i in range(len(left)):
                # print(f'left: {left}')
                # print(f'i: {i}')
                new_current = current.copy()
                new_current.append(left[i])
                # print(f'current: {current}')
                new_left = left.copy()
                new_left.pop(i)
                # ##?? It is more than backtrack, this function need to have a return for each loop
                # return self.helper(new_current, new_left)
                self.helper(new_current, new_left)


solution = Solution()
# print(solution.helper([], [1, 2]))
# print(solution.permute([1, 2, 3]))
print(solution.permute([1, 2]))
print(solution.permute([1]))
