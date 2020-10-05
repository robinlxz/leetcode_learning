// Mine. 2 submission error for special situation
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    // console.log('zero length deteced');
    return '';
  }
  let pref = '';
  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0].slice(i, i + 1);
    for (let str of strs) {
      if (currentChar !== str.slice(i, i + 1)) {
        // console.log('not same');
        // console.log('ready to return pref');
        return pref;
      }
    }
    // console.log('same');
    pref += currentChar;
  }
  return pref;
};

// //Best solution in discussion use strs.reduce()
// https://leetcode.com/problems/longest-common-prefix/discuss/6983/Js-higher-order-function-solution-with-concise-and-easy-to-understand-code

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// console.log(longestCommonPrefix([]));
// console.log(longestCommonPrefix(['']));
