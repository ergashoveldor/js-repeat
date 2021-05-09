let numbers = [1,2,3,4,5];

function getMaxNumber(array) {
    if(array.length === 0) return undefined;

    let maxNumber = array.reduce((a, b) => (a > b) ? a : b);
    // let maxNumber = array[0];
    // for(let i=0; i< array.length; i++)
    //     if(array[i] > maxNumber)
    //         maxNumber = array[i];
           return maxNumber;
}
let maxNumbers = getMaxNumber(numbers);
console.log(maxNumbers);

//console.log(Math.max(...numbers));