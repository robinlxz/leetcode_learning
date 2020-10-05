from typing import List


class Solution:
    def find_prefix_for_two_str(self, word1: str, word2: str):
        s1 = min(word1, word2)
        s2 = max(word1, word2)
        # print(s1, s2)
        for i, c in enumerate(s1):
            # print(i, c)
            # print(s2)
            # print(s2[i])
            if s2[i] != c:
                return s1[:i]
        return s1

    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''
        # print(strs)
        max_prefix = strs[0]
        for string in strs:
            # print(max_prefix, string)
            max_prefix = self.find_prefix_for_two_str(max_prefix, string)
        return max_prefix


solution_instance = Solution()
print(solution_instance.longestCommonPrefix(['ab', 'ac', 'a', 'b']))
# print(solution_instance.find_prefix_for_two_str('a', 'b') == '')
# print(solution_instance.find_prefix_for_two_str('ab', 'ac'))
