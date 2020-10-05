from typing import List


class Solution:
    result_list = []

    def possible_generations(self, n_open: int, n_close: int, current: str) -> str:
        if n_close == 0:
            self.result_list.append(current)
            return
        elif n_open == 0:
            self.possible_generations(n_open, n_close - 1, current+')')
        else:
            if n_open < n_close:
                self.possible_generations(n_open - 1, n_close, current + '(')
                self.possible_generations(n_open, n_close - 1, current+')')
            elif n_open == n_close:
                self.possible_generations(n_open - 1, n_close, current+'(')
            else:
                raise ValueError(
                    f'Error! n_open:{n_open} is larger then n_close:{n_close}.')

    def generateParenthesis(self, n: int) -> List[str]:
        self.result_list = []
        self.possible_generations(n, n, '')
        return self.result_list


solution_instance = Solution()
# print(solution_instance.possible_generations(5, 5))
print(solution_instance.generateParenthesis(2))
print(solution_instance.generateParenthesis(2))


# The backtracking solution from LeetCode is with less code
class Solution(object):
    def generateParenthesis(self, N):
        ans = []

        def backtrack(S='', left=0, right=0):
            if len(S) == 2 * N:
                ans.append(S)
                return
            if left < N:
                backtrack(S+'(', left+1, right)
            if right < left:
                backtrack(S+')', left, right+1)

        backtrack()
        return ans
