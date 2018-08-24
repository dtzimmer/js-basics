//Create a function called countTruthy that takes in an array
// and counts how many truthy values are in that array.

const array = [ 'bob', 1, true, '', undefined, 3, 5, null];

console.log(countTruthy(array));

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

function countTruthy(array) {
    let count = 0; //initialize the count to 0
    for (let value of array) //for...of loop iterates over each item in the array
        if (value) //if value is 'truthy' then..
            count++ //this count will be implemented
        return count; //return the number of items in the array that are truthy
}