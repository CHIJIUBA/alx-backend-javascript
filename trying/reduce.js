const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum);
