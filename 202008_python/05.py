'''
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
https://leetcode.com/problems/longest-palindromic-substring/
'''


# Brutal
# class Solution:
#     def longestPalindrome(self, s: str) -> str:
#         # mid_pointer = len(s) // 2
#         longest_palindrome = s[0]
#         for i in range(len(s)):
#             for j in range(i, len(s)+1):
#                 # print(s[i:j])
#                 # print(s[j:i:-1])
#                 # print(i, j)
#                 if s[i:j] == s[i:j][::-1] and len(s[i:j]) > len(longest_palindrome):
#                     longest_palindrome = s[i:j]
#         return longest_palindrome


# dynamic?
class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ''
        for i in range(len(s)):
            odd = self.get_palindrom(s, i, i)
            even = self.get_palindrom(s, i, i + 1)
            # print(f'i: {i}, odd: {odd}, even: {even}')
            longest = max(longest, odd, even, key=len)
            # print(f'longest: {longest}')
        return longest

    def get_palindrom(self, s, l, r):
        # print(f'out:  l:{l}, r:{r}')
        # print(s[l])
        # print(s[r])
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
            # print(f'in while:  l:{l}, r:{r}')
        return s[l+1:r]


test_instance = Solution()
print(test_instance.longestPalindrome('babad'))
# print(test_instance.longestPalindrome('cbbd'))
