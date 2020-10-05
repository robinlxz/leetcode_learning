/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function (nums) {
//   let maxValue = nums.reduce((a, b) => Math.max(a, b));
//   if (maxValue <= 0) return maxValue;
//   function sameSideCombine(inputArr) {
//     let outputArr = [];
//     let tmp = 0;
//     for (let i = 0; i < inputArr.length; i++) {
//       if (inputArr[i] * tmp >= 0) {
//         tmp += inputArr[i];
//         // console.log('i:' + i + '||tmp:' + tmp);
//       } else {
//         // console.log('i:' + i + '||tmp:' + tmp);
//         outputArr.push(tmp);
//         tmp = inputArr[i];
//       }
//     }
//     outputArr.push(tmp);
//     return outputArr;
//   }

//   function combineToMax(arr) {
//     let result = [];
//     if (arr[0] < 0) arr.shift();
//     // If a[0]+a[1] > 0, and a[1] + a[2] > 0, we can combine these three into one

//     let tmp = arr[0];
//     for (let i = 1; i < arr.length; i += 2) {
//       if (tmp + arr[i] > 0 && arr[i] + arr[i + 1] > 0) {
//         tmp += arr[i] + arr[i + 1];
//       } else {
//         result.push(tmp);
//         result.push(arr[i]);
//         tmp = arr[i + 1];
//       }
//     }
//     result.push(tmp);
//     result = result.filter((a) => a !== undefined);
//     return result;
//   }

//   let plusMinusArr = sameSideCombine(nums);
//   console.log(plusMinusArr);
//   let subMaxArr = combineToMax(plusMinusArr);
//   let currentLength = 0;
//   while (currentLength !== subMaxArr.length) {
//     console.log(subMaxArr);
//     currentLength = subMaxArr.length;
//     subMaxArr = combineToMax(subMaxArr);
//   }

//   return subMaxArr.reduce((a, b) => Math.max(a, b));
// };

// Solution from LeetCode

var tmp;

// Learn from solution of Dynamic Programming
var maxSubArray = function(nums) {
    for (let i = 1; i< nums.length; i++) {
      nums[i] = Math.max(nums[i]+nums[i-1], nums[i]);
    }
    return Math.max(...nums)
};

/* Test area */
console.log(maxSubArray([3, -2, -3, -3, 1, 3, 0]));
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1]));
console.log(
  maxSubArray([-5, 8, -5, 1, 1, -3, 5, 5, -3, -3, 6, 4, -7, -4, -8, 0, -1, -6])
);
// console.log(
//   maxSubArray([8, -2, -4, -1, -8, 3, 8, 8, 3, 4, 2, -9, -1, -3, -6, 8, -3, 9])
// );
// console.log([-2, 1, -3, 4, -1, 2, 1, -5, 4].indexOf(4, 4));
