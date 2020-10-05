//https://leetcode.com/problems/two-sum/

// //My 1st solution 20200527
// var twoSum = function(nums, target) {
//   // console.log(nums.length)
//   let [a,b] = [-1, -1];
//   let firstIndex = 0;
//   let secondIndex = 0;
//   //first Index loop
//   while (firstIndex < nums.length - 1) {
//     //second index loop
//     secondIndex = firstIndex + 1;
//     while (secondIndex < nums.length) {
//       // console.log(secondIndex);
//       if (nums[firstIndex] + nums[secondIndex] == target) {
//         // console.log('find it')
//         return [firstIndex, secondIndex]
//       } else {
//         secondIndex += 1;
//       }
//     }
//     firstIndex += 1;
//   }
// };

// Learn after check online solution
// 'Use Object or Map to Hash'
// 'Create during search, so only one loop is needed'

var twoSum = function (nums, target) {
  let result = [];
  let exist = {};

  for (let i = 0; i < nums.length; i++) {
    if (exist[target - nums[i]] !== undefined) {
      result.push(exist[target - nums[i]]);
      result.push(i);
      return result;
    } else {
      exist[nums[i]] = i;
    }
  }
};

// console.log(twoSum([2, 7, 11, 13], 9));
console.log(twoSum([1, 3, 3], 6));
