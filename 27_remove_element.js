var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] !== val) {
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);
