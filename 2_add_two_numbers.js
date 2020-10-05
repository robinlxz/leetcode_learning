// // Test and learning List
// const n1 = {
//   val: 1,
// };

// const n2 = {
//   val: 7,
// };

// // const n3 = {
// //   val: 7,
// // };

// // n2.next = n3;
// n1.next = n2;

// My solution, not accepted by LeetCode, I guess the data type is different?
var addTwoNumbers = function (l1, l2) {
  function getArrFromList(myList) {
    let arr = [];
    let pointer = myList;
    while (pointer !== null && pointer.next !== undefined) {
      arr.unshift(pointer.val);
      pointer = pointer.next;
    }
    arr.unshift(pointer.val);
    return arr;
  }
  // console.log(getArrFromList(l1));
  let sumNumber =
    parseInt(getArrFromList(l1).join('')) +
    parseInt(getArrFromList(l2).join(''));
  console.log(sumNumber);

  // let sumArr = sumNumber.split('');
  // for (let i = 0; i < sumNumber.length; i ++)
  let resultList = {
    val: sumNumber % 10,
  };
  let pointer = resultList;
  let newNode = {};
  while (sumNumber > 10) {
    sumNumber = Math.floor(sumNumber / 10);
    newNode = {};
    newNode.val = sumNumber % 10;
    pointer.next = newNode;
    pointer = newNode;
  }
  return resultList;
};

console.log(addTwoNumbers(n1, n1));
