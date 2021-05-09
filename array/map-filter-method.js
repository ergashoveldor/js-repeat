

// map metodi
let numbers = [2,-2,5,1,-4];
let items = numbers
                .filter(number => number >= 0)
                    .map((number) => {
                        return {value: number};
                    })
                    .filter(obj => obj.value > 1);
console.log(items);

// let items = filtered.map(number => '<li>' + number + '</li>');
// let joinString = '<ul>' + items.join('') +'</ul>';