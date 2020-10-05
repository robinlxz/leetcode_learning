import unittest
from q1_two_sum import Solution

class TestTwoSum(unittest.TestCase):
  def test_output(self):
    nums = [2, 7, 11, 15]
    target = 9
    TestInstance = Solution()
    # self.assertEqual(TestInstance.twoSum())
    result = TestInstance.twoSum(nums, target)
    self.assertIn(result, [[0,1], [1,0]])

if __name__ == '__main__':
    unittest.main()