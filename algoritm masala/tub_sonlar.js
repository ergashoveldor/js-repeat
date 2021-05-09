 /* Object haqida masala */
// let car = {
//     model: 'Toyota',
//     make: 'Istima',
//     year: 2006,
//     price: 5000
// }

// function showProperties(obj) {
//     for (let key in obj) {
//         if(typeof obj[key] === 'string') 
//             console.log(key, obj[key])
//     }
// }

// showProperties(car)

/* Array haqida masala*/
// const marks = [81, 74, 86, 99, 77];

// console.log(calculateGrads(marks));

// function calculateGrads(marks) {
//     let avrg = calculateAverage(marks);
//        if(avrg < 50) return 'F';
//        if(avrg < 60) return 'E';
//        if(avrg < 70) return 'C';
//        if(avrg < 80) return 'B';
//        return 'A';
// }

// function calculateAverage(array) {
//     let result = 0;
//     for (let value of array) 
//        result += array;

//        let avrg = result / array.length;
//        return avrg;
// }

console.log(showPrimeNumbers(37));

function showPrimeNumbers(limit) {
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(number) {
        for(let factor = 2; factor < number; factor++) 
            if(number % factor === 0) 
                return false;

        return true;
}