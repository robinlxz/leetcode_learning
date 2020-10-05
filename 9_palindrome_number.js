// Mine 20200528
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }

//   let reversed = parseInt(x.toString().split('').reverse().join(''));

//   // console.log(reversed);

//   return x == reversed;
// };

// To learn (1st rewrite 20200528)
// By compare front and end with arr.shift() and arr.pop()

var isPalindrome = function (x) {
  let arr = String(x).split('');

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) return false;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
