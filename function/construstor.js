
// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('doira');
    }
}

const circle = new Circle(1);
circle.color = 'green';
circle.name = 'nexia';

delete circle.color;

console.log(circle);