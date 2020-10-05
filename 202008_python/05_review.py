# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
class Solution:
    # Brute force
    # def longestPalindrome(self, s: str) -> str:
    #     longest = ''
    #     for i in range(len(s)):
    #         for j in range(i, len(s)):
    #             if s[i:j + 1] == s[i:j + 1][::-1]:
    #                 longest = max(longest, s[i:j + 1], key=len)
    #     return longest

    def longestPalindrome(self, s: str) -> str:
        longest = ''
        for i in range(len(s)):
            odd = self.longest_palin_by_expanding(s, i, i)
            even = self.longest_palin_by_expanding(s, i, i + 1)
            longest = max(longest, odd, even, key=len)
        return longest

    def longest_palin_by_expanding(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]


test_instance = Solution()
assert(test_instance.longestPalindrome('babad') ==
       'bab' or test_instance.longestPalindrome('babad') == 'aba')
assert(test_instance.longestPalindrome('aac') == 'aa')
assert(test_instance.longestPalindrome('cbbd') == 'bb')
# print(Solution.longest_palin_by_expanding('ccabac', 3, 3))
print('done')
