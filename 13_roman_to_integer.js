// Mine, 50 mins. A key thought change: not to 'splice out' the part, but only remove the outcome from the result. (minus the effect which shouldn't be counted)
// var romanToInt = function (s) {
//   let res = 0;

//   let replace = {
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };

//   let romanValue = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//     '': 0,
//   };

//   for (key of Object.keys(replace)) {
//     let i = s.indexOf(key);
//     if (i !== -1) {
//       res += replace[key];
//       //Take it out from s, last step to finish.
//       // ! No need, just remove the extra part will do~
//       key.split('').forEach((k) => (res -= romanValue[k]));
//     }
//   }

//   sArr = s.split('');
//   while (sArr.length > 0) {
//     res += romanValue[sArr.shift()];
//   }

//   return res;
// };

// Learn from solution: a simple comparison of value works

var romanToInt = function (s) {
  let romanValue = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let res = 0;
  // Here it considered 1<undefined is false, so the last comparison still works. (Thus cannot change '<' to '>')
  for (let i = 0; i < s.length; i++) {
    romanValue[s[i]] < romanValue[s[i + 1]]
      ? (res -= romanValue[s[i]])
      : (res += romanValue[s[i]]);
  }
  // res += romanValue[s[s.length - 1]];

  return res;
};

console.log(romanToInt('MCMXCIV'));
