
const books = [
    { title: 'Book-1', yaer: 2008, rating: 8.2 },
    { title: 'Book-2', year: 1994, rating: 9.1 },
    { title: 'Book-3', yaer: 2018, rating: 8.7 },
    { title: 'Book-4', year: 1994, rating: 9.3 },
    { title: 'Book-5', yaer: 2010, rating: 8.4 },
    { title: 'Book-6', year: 2014, rating: 7.1 },
    { title: 'Book-7', yaer: 2009, rating: 7.7 },
    { title: 'Book-8', year: 2004, rating: 6.9 },
];

let titles = books
    .filter(b => b.year > 2010 && b.rating > 8)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(b => b.title);

    console.log(titles);