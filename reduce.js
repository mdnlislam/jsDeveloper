const arr = [1, 2, 3, 4];

const total = arr.reduce((acc, curr, index) => {
  return acc - curr;
}, "");

console.log(total);
