// |--6-- Jaden Casing Strings - 7 kyu

// String.prototype.toJadenCase = function () {
//   return this.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// };

// |--7-- Exes and Ohs - 7 kyu

// const XO = str => str.toLowerCase().split('x').length == str.toLowerCase().split('o').length

// |--8-- Fat Fingers - 7 kyu

// var fatFingers = function (str) {
//   if (str == null) return null;
//   if (!str) return "";

//   let notA = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() != "a") {
//       notA = !notA;
//     }
//   }

//   if (notA) {
//     return str;
//   }

//   let resA = true;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() != "a") {
//       resA = false;
//       break;
//     }
//   }

//   if (resA) {
//     let a = "";
//     return a;
//   }

//   let res = "";
//   let capsLock = false;
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     if (letter == "a" || letter == "A") {
//       capsLock = !capsLock;
//     } else {
//       if (capsLock) {
//         res += letter.toUpperCase();
//       } else {
//         res += letter;
//       }
//     }
//   }

//   return res;
// };

// console.log(fatFingers("The quick brown fox jumps over the lazy dog."));
