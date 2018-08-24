//Write a function that takes two numbers and 
//and returns the maximum of the two. 

let number = max(3, 5);
console.log(number);

function max(a, b) {
    // if (a > b) return a;
    // return b; //don't need 'else' because it jumps out of the function anyway
    //
    //But...this is a better way
    return (a > b) ? a : b;
}