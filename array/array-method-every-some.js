

// every, some va filter methodlari

 let numbers = [2, 3, -5, 1, -4];

 let filtered =  numbers.filter((number) => {
        return number >= 0;
    });
    console.log(filtered);

// let isAllPositive = numbers.every((number) => {
//     return number >= 0;
// })
// console.log(isAllPositive);

// every da hamma indexlar musbat son bo'lsa true qaytaradi yo'qsa false
// some bitta index musbat son bo'lsa ham true chiqaradi

// let numbers = [2, 3, -5, 1, 4];
// let isAllPositive = numbers.some((number) => {
//     return number >= 0;
// })
// console.log(isAllPositive);
