// |--1-- Student's Final Grade - 8 kyu

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) return 100;

//   if (exam > 75 && projects >= 5) return 90;

//   if (exam > 50 && projects >= 2) return 75;

//   return 0;
// }

// const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;

// console.log(finalGrade(70, 5));

// |--2-- Century From Year - 8kyu (decade)

// const century = (year) => year % 100 !== 0 ? Math.floor(year / 100) + 1 : year / 100; // 1st way

// const century = (year) => Math.ceil(year / 100); // 2nd way

// console.log(century(2023));

// |--3-- Mumbling - 7 kyu (built in)

// const accum = (s) => {
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       if (j == 0) {
//         res += s[i].toUpperCase();
//       } else {
//         res += s[i].toLowerCase();
//       }
//     }
//     if (i != s.length - 1) {
//       res += "-";
//     }
//   }
//   return res;
// };

// console.log(accum("absd"));

// |--4-- Decode the Morse code - 6 kyu ('a' + undefined)

// const decodeMorse = (morseCode) => morseCode.split('   ').map(word => word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ').trim()

// |--5-- Binary Addition - 7 kyu

// const addBinary = (a, b) => (a + b).toString(2);

// console.log(addBinary(5, 5));
