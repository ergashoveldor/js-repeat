//  let a = 5;
//  let b = a;

//  a = 10;
//  console.log(a);
//  console.log(b);

// let number = 1;
// function isVisible(number) {
//     number++;
//     console.log('inside: ', number);
// }
// isVisible(number)
// console.log('outside: ', number);

// let x = { value: 1};
// let y = x;

// x.value = 15;
// console.log(x);
// console.log(y);

let obj = { number: 1};
function isVisible(obj) {
    obj.number++;
    console.log(obj);
}
isVisible(obj);
console.log(obj);