// Callback tushunchasi


// function add(a, b, callback) {
//     console.log(`${a} va ${b} larning yigindisi ${a + b}.`);
//     callback();
// }

// function display() {
//     console.log('Bu qator qoshuvdan keyin chiqadi.');
// }

// add(3, 4, display);

function add(a, b, callback) {
    console.log(`${a} va ${b} larning yigindisi ${a + b}.`);
    callback();
}


add(3, 4, function display() {
    console.log('Bu qator qoshuvdan keyin chiqadi.');
});