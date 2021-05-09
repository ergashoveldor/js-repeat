

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Hello World');
        }
    }
}

const result = createCircle(15);
console.log(result);