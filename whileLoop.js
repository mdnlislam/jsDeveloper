const cars = ["BMW", "Volvo", "Saab"];
console.log(cars);
let i = 1;
let max = 1000000;
let sum = 0;
console.time("sum");
while (i <= max) {
  sum = sum + i;
  i++;
}

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
//  1+2+3+4+5+6+7+8+9+10
//  sum=i
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10, sum);

console.timeEnd("sum");

console.time("sum2");
let sum2 = (max * (max + 1)) / 2;
console.log(sum2);
console.timeEnd("sum2");
