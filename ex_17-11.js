const monkeyCount = (n) => {
  let sum = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      sum.push(i);
    }
  }
  return sum;
};
