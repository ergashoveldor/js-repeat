
// let circle = {
//     radius: 78,
//     get area() {
//         return Math.PI * Math.pow(this.radius,2);
//     }
// }

// console.log(circle.area);

let personJson = '{"age": 30, "name": "Eldor"}';
try {

    let person = JSON.parse(personJson);
    if (!person.name)
        throw new Error('name not found');
    console.log(person.name);
} catch (e) {
    console.log('Xato: ', e.message);
}
//console.log(person.name);