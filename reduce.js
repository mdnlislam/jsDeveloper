const arr = [1, 2, 3, 4];

const total = arr.reduce((acc, curr, index) => {
  return acc - curr;
}, "");

console.log(total);

const numbers = [1, 2, 3, 4, 5];

const average = numbers.reduce((accumulator, currentvalue, index, array) => {
  // if (currentvalue !== 4) {
  //   accumulator.push(currentvalue);
  // }
  accumulator += currentvalue;

  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}, 0);

console.log(average);
