// Create a function called show properties of the object
// that are a string type

const movie = {
    title: 'Episode 9: Revenge of the Monkey',
    releaseYear: 2019,
    rating: 4.5,
    director: 'George Lucas' 
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) //Use a for...in loop
        if (typeof obj[key] === 'string') //check if the typeof is a string
        console.log(key, obj[key]); //log the key and the property using bracket notation
}

//Explanation of using bracket notation  :
//key is the property names of the object
//the value of key changes so we can't use dot notation (like obj.title)
//to get the value, use bracket notation
//so then we do obj[key] because then whatever key or 
//the property name is, it will access that value. 

//Example:
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person['key']);