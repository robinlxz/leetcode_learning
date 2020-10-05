from typing import List


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        new_matrix = [[] for _ in range(len(matrix))]
        for i in range(len(matrix)):
            for line in matrix:
                # new_matrix[i].append(line[-i]) # why not works?
                new_matrix[i].insert(0, line[i])
        # return new_matrix
        del matrix[:]
        for line in new_matrix:
            matrix.append(line)


solution = Solution()
# print(solution.rotate([[1, 2], [3, 4]]))
print(solution.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

# def test(a):
#     # a.pop()
#     del a[:]
#     a.insert(0, 4)


# b = [3]
# print(b)
# test(b)
# print(b)
