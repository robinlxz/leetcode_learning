/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // let tmp = 0 ;
  for (let i = digits.length -1 ; i>-1; i--) {
    if (digits[i] !== 9 ) {
      digits[i] += 1
      break
    } else {
      digits[i] = 0;
      if (i==0) {digits.unshift(1);}
    }
  }
  return digits
};

// console.log(plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]));
console.log(plusOne([9]));