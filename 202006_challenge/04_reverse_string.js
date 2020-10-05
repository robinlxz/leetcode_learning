// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Swap test

// let arr = [1, 2, 3];
// [arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr);

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

let input = [2, 3, 4, 5, 6];
reverseString(input);
console.log(input);
