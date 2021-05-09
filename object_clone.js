
const circle = {
    radius: 1,
    draw() {
        console.log('doira')
    }
}
// Object dan clone olish

// 1-usul
// const clone = {};
// for(let key in circle)
//     clone[key] = circle[key];

//2-usul 
//const clone = Object.assign({}, circle);

//3-usul
 const clone = {...circle};
    console.log(clone);