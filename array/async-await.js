// async await

async function getCustomerName() {
    let name = await 'Eldor';
    console.log(name);
    return name;
}

//getCustomerName().then(data => console.log(data));
console.log(1);
getCustomerName();
console.log(2);
