//Create a function getMax that returns the largest number in the array.

// const allPositive = numbers.every(function(value){ //stops at the first failure
//     return value >= 0;
// });

// THIS IS THE BASIC IMPLEMENTATION BELOW *****************************************

// const numbers = [1, 2, 3, 4, 99];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined; //VALIDATION - if array is empty, return undefined 
//     let max = array[0];   //assume that the first item in the array is the 'max'

//     for (let i = 1; i< array.length; i++) //do a for loop starting at 1, on condition i is less than the array's length, increment i by 1
//         if (array[i] > max )  // if i (index) of the array is bigger than the first item of the array...   if not, then return max (it is largest)
//             max = array[i]; // set a new value to max that is that number at that index
//     return max //this is when max is found and then it's console.logged above.
// }

//*************************************************************************************** 

const numbers = [1, 2, 3, 4, 99];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined; //VALIDATION - if array is empty, return undefined 
    
    return array.reduce((a, b) => (a > b) ? a: b); //Takes in two values, compares them, and if 
    //note that a = accumulator
    //note that b = currentvalue

}

//TAKE AWAY = if you want to get a single value from an array, think of the single value