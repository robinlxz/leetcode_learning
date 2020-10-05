// Mine
function fib(n) {
  if (n < 3) {
    return 1;
  } else {
    let fibArr = [1, 1];
    for (let i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n - 1];
  }
}

/*
Lesson: https://www.youtube.com/watch?v=vYquumk4nWw
1. Recursion
2. State (Memoize)
3. Bottom-up //Similar to mine
*/

console.log(fib(5));
