
//let first = [{id: 1}];
let first = [1,2,3];
let second = [4,5,6];


let combined = [...first,...second];

combined.forEach((item,index) => {
    console.log(index, item);
})
// for (let item of combined)
// console.log(item);
//let joinedString = combined.join('-');
//console.log(combined);
//console.log(joinedString);
// let combined = first.concat(second);
// first.id = 7;
// console.log(combined);
// console.log(first);
// let sliced = combined.slice(2,3);
// console.log(sliced);

// concat -> to'plamlarni birlashtiradi
// slice -> to'plamlarni ajratadi
