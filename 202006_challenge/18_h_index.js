// https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3364/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length == 0) return 0;
  if (Math.max(...citations) < 1) return 0;
  for (let i = citations.length; i > 0; i--) {
    if (citations[citations.length - i] >= i) return i;
  }
  return 1;
};

console.log(hIndex([0]));
