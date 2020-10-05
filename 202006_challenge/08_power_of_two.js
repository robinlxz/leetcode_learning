// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1 || n == 2) return true;
  if (n % 2 !== 0 || n < 1) return false;
  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(512));
