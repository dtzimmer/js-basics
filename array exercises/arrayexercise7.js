
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

// All the movies in 2018 with rating > 4
//Sort them by their ratiing
// Descending order
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating>= 4) //filter movies by year 2018 and rating over 4
    .sort((a, b) => a.rating - b.rating) //get the rating of a and subtract from rating of b 4.5-4 = positive number
    .reverse() //changes the order of the titles
    .map(m => m.title) //just want the title name

    console.log(titles);

