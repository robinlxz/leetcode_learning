// https://leetcode.com/problems/reverse-integer/

// //My 1st solution 20200527
// var reverse = function (x) {
//   if (Math.abs(x) > 2 ** 31 || x == 2 ** 31) {
//     return 0;
//   }
//   let xArr = Math.abs(x).toString().split('');
//   // console.log(xArr);
//   resultArr = [];
//   for (let i = xArr.length - 1; i >= 0; i--) {
//     // console.log(xArr[i]);
//     resultArr.push(xArr[i]);
//   }
//   // console.log(resultArr);
//   let resultStr = resultArr.join('');
//   // console.log(resultStr);
//   result = parseInt(resultStr);
//   if (x < 0) {
//     result = -result;
//   }
//   if (Math.abs(result) > 2 ** 31 || result == 2 ** 31) {
//     return 0;
//   }
//   return result;
// };

console.log(reverse(1230));
console.log(reverse(-1230));
console.log(reverse(1534236469));

let x = 123;
