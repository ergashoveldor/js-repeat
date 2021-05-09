// Promiselar haqida

let isBookshopOpne = true;
//promise
let willGetNewBook = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            if (isBookshopOpne) {
                let book = {
                    title: 'The BIG book of knowledge',
                    author: 'Brown Watson'
                };
                resolve(book); // fullfilled
            } else {
                let reason = new Error('Magazin yopiq');
                reject(reason);  //reject
            }

        }, 1500);
    }
);

willGetNewBook
    .then(result => console.log(result))
    .catch(error => console.log(error.message));