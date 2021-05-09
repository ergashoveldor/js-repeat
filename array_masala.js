


let Arraygroup = ['salom','eldor','talaba',45,84,'universitet','tugadi'];

function newFunction() {
    for(let i=0; i<Arraygroup.length; i++) {
        if(typeof Arraygroup[i] === 'number') {
            console.log(`${Arraygroup[i]}`)
        }
    }
}

newFunction()