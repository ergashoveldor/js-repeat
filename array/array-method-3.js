

// to'plamlarni tartiblash
// sort to'g'ri tartiblash ya'ni [1,2,3,4,5]
// reverse teskari tartiblash ya'ni [5,4,3,2,1]
let numbers = [2,3,5,1,4];

let courses = [
    {id:1, title: 'Redux'},
    {id:2, title: 'Node Js'},
    {id:3, title: 'aSP.Net'}
];

courses.sort((first,second) => {
    let titleFirst = first.title.toLowerCase();
    let titleSecond = second.title.toLowerCase();
    if(titleFirst < titleSecond) return -1;
    if(titleFirst > titleSecond) return 1;
    return 0;
})

console.log(courses);
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);