//Write a function that excludes number from an array
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2, 3]);

console.log(output);

function except(array, excluded) { //create a function with two parameters, the array and the excluded array
    const output = []; //initialize the output array
    for (let element of array) //iterator over the original array
        if (!excluded.includes(element)) //check if the current element is NOT (!) in the excluded array
            output.push(element); //push those on the output array
    return output; //return the array of numbers not on the excluded array
}