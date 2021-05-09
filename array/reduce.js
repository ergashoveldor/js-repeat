

let numbers = [7, 2, 3, 8];
// let sum = 0;
// for (let number of numbers) 
//   sum += number;

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(sum);