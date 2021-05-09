

// let laptop = {
//     CPU: 'Core i5-10th',
//     SSD: '128 gb',
//     Scrennsize: 15.6,
//     HARD: '1tb',
//     Model: 'Lenovo',
//     Price: '725$',
//     powerOn() {
//         console.log('Hello World');
//     }
// }
// console.log(laptop);

//factory function
 /* function createLaptop(CPU,SSD,Scrennsize,HARD,Model,Price) {
    return {
    CPU,
    SSD,
    Scrennsize,
    HARD,
    Model,
    Price,
    powerOn() {
        console.log('Hello World');
    }
    }
}

let laptop = createLaptop('Core i5-10th','240gb',15.6,'1tb','Lenovo','725$');
console.log(laptop);
*/
// constructor function

function Laptop(CPU,SSD,Scrennsize,HARD,Model,Price) {
    this.cpu = CPU;
    this.ssd = SSD;
    this.Scrennsize = Scrennsize;
    this.hard - HARD;
    this.model = Model;
    this.Price = Price;
    this.powerOn = function() {
        console.log('On');
    }
}

const laptop = new Laptop('Core i5-10th','240gb',15.6,'1tb','Lenovo','725$');
console.log(laptop);