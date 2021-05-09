

const numbers = [1,2,3,4,5];
//console.log(numbers.includes(3));

function includes(array, elementToFind) {
    for(let element of array)
        if(element === elementToFind) return  true;
        return false;
}

let number = includes(numbers, 3);
console.log(number);