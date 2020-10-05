// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let dic = {};
  for (let i = 0; i < nums.length; i++) {
    dic[nums[i]] == undefined ? (dic[nums[i]] = 1) : (dic[nums[i]] += 1);
  }
  for (let key of Object.keys(dic)) {
    if (dic[key] == 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
