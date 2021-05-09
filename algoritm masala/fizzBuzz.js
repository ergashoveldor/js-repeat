//  function getMax(a,b) {
//      return (a > b) ? a : b;
//  }

// let number = getMax(6,5);
// console.log(number)

// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log(isLandscape(600,800))

function fizzBuzz(input) {
    if (typeof input !== 'number') return 'Son emas';
    if ( input % 3 == 0 && input % 5 == 0) return 'FizzBuzz';
    if (input % 3 == 0) return 'Fizz'
    if (input % 5 == 0) return 'Buzz'
    
    return input;
    
}

console.log(fizzBuzz(11))
// input 3 ga bo'linsa , Fizz qaytadi
// input 5 ga bo'linsa, Buzz qaytadi
// input 3 ga ham 5 ga ham bo'linsa FizzBuzz qaytadi
// input 3 ga ham 5 ga ham bo'linmasa , input'ni o'zi qaytadi
// input son bo'lmasa , 'son emas' deb qaytadi
