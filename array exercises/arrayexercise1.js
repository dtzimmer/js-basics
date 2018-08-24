//Write a function that takes two parameters min and max
// and displays all numbers in that range.

const numbers = arrayFromRange(1, 15);

console.log(numbers); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

function arrayFromRange (min, max) { //create an array that takes in a min and max value
    const output = []; //initialize an output array
    for (let i = min; i <= max; i++) //do a for loop that starts at the min value and has a condition that checks if less than the max, increments by one each iteration
     output.push(i); //then the values are pushed on the output array
    return output; //we return the output array
}