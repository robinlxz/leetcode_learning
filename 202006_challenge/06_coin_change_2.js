/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
*/

// My 29 mins solution, exceed time for 500 [3,5,7,8,9,10,11]
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  if (amount == Math.min(...coins)) {
    // console.log('it hits the min case');
    return 1;
  } else if (amount == 0) {
    return 1;
  } else if (amount < Math.min(...coins)) {
    return 0;
  } else {
    let total = 0;
    for (let c of coins.filter((c) => c <= amount)) {
      // console.log(total, amount, c);
      total += change(
        amount - c,
        coins.filter((i) => i <= c)
      );
      // console.log('total:' + total);
    }
    return total;
  }
};

console.log(change(5, [1, 2, 5]));
console.log(change(5, [1, 2]));
console.log(change(500, [3, 5, 7, 8, 9, 10, 11]));
