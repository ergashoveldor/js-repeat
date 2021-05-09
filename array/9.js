let numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    let position = index + offset;
    if(position >= array.length || position < 0) {
        console.log('Invalid offset.');
        return;
    }
    let result = [...array];
    let element = result.splice(index, 1)[0];
    result.splice(position, 0, element);
    return result;
}


let output = move(numbers, 0, 4);
console.log(output);