class Solution:
    def reverse(self, x: int) -> int:
        if x < -(2**31) or x >= 2**31-1:
            return 0
        else:
            str_x = str(abs(x))
            str_reversed_x = str_x[::-1]
            if x < 0:
                a = -int(str_reversed_x)
            else:
                a = int(str_reversed_x)
            mina = -(2**31)
            maxa = 2**23 - 1
            if a not in range(mina, maxa):
                return 0
            else:
                return a


solution_instance = Solution()
print(solution_instance.reverse(1534236469))
# print(solution_instance.reverse(123456))
