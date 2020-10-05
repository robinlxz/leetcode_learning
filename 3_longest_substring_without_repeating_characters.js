var lengthOfLongestSubstring = function (s) {
  if (s.length == 1) {
    return 1;
  }
  // Find each longest for start position from 0 to .length - longest
  let longest = 0;
  for (let i = 0; i < s.length - longest; i++) {
    // console.log('i:', i);
    for (let j = i + 1; j < s.length; j++) {
      // console.log('j:', j);
      // console.log(s.slice(i, j), s[j]);
      if (s.slice(i, j).includes(s[j])) {
        longest = Math.max(j - i, longest);
        break;
      }
      longest = Math.max(j - i + 1, longest);
    }
  }
  return longest;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('au'));
