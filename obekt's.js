

// let i = 0;
// while(i < 10) {
//     if(i === 7)
//     break;
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i < 10) {
//     if(i%2 !== 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


let person = {
    firstName: 'Eldor',
    lastName: 'Ergashov',
    years: 21
}

for(let key in person) {
    console.log(key, person[key]);
}

const colors = ['white','black','red','green','blue'];

for(let index in colors) 
    console.log(index, colors[index]);

for(let color of colors)
    console.log(color);