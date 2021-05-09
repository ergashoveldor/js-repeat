

function CreateCircle(name) {
    this.name = name;
    this.number = function() {
        console.log('Hello World');
    }
}

//console.log(CreateCircle.name, CreateCircle.length, CreateCircle.constructor);

console.log(CreateCircle.call({}, 4));
console.log(CreateCircle.apply({},[4]))