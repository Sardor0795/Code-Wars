// function squareDigits(num) {
//     num = String(num);

//     let arrNum = num.split("");
//     let sqArr = [];

//     for (let i = 0; i < arrNum.length; i++) {
//       sqArr.push(arrNum[i] ** 2);
//     }

//     let sqNum = sqArr.join("");

//     return +sqNum;
//   }

// function findOdd(arr) {
//   let odd = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (odd[arr[i]]) {
//       odd[arr[i]]++;
//     } else {
//       odd[arr[i]] = 1;
//     }
//   }
//   for (let key in odd) {
//     if (odd[key] % 2 !== 0) {
//       return +key;
//     }
//   }
// }

// Reversed Strings 8 kyu ---


// const solution = str => str.split('').reverse().join('');
