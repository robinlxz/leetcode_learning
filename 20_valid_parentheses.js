// Mine, 20200530, 12mins
var isValid = function (s) {
  if (s.length == 0) {
    return true;
  }
  let open = [];
  // let close = [];
  let allOpen = ['(', '[', '{'];
  // let allClose = [')', ']', '}'];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i of s.split('')) {
    if (allOpen.includes(i)) {
      // console.log(i);
      open.push(i);
    } else {
      if (pairs[open.pop()] !== i) {
        return false;
      }
    }
  }
  if (open.length != 0) {
    return false;
  }
  return true;
};

// Online Solution, using switch so only push '}' for '{', and use charAt instead of s.split()

console.log(isValid('()[]{}'));
console.log(isValid('([)]'));
console.log(isValid('('));
