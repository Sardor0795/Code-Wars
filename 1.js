// |--- Student's Final Grade - 8 kyu

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) return 100;

//   if (exam > 75 && projects >= 5) return 90;

//   if (exam > 50 && projects >= 2) return 75;

//   return 0;
// }

// const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;

// console.log(finalGrade(70, 5));

// |--- Century From Year - 8kyu (decade)

// const century = (year) => year % 100 !== 0 ? Math.floor(year / 100) + 1 : year / 100; // 1st way

// const century = (year) => Math.ceil(year / 100); // 2nd way

// console.log(century(2023));
