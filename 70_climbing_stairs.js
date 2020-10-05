//Known the tag already when I first try this (for practice specific kind)

// First try exceeding the time limit
// var climbStairs = function (n) {
//   if (n == 1) return 1;
//   else if (n == 2) return 2;
//   else return climbStairs(n - 2) + climbStairs(n - 1);
// };

var climbStairs = function (n) {
  if (n == 1) return 1;
  else if (n == 2) return 2;
  else {
    let fibArr = [1, 2];
    for (i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n - 1];
  }
};
