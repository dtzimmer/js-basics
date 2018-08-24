//Create a function called sum that takes a varying amount
// of arguments and adds them together.

console.log(sum([1,2,3,4,5]));

//            this turns it into an array, so it becomes a nested array
//                v
function sum(...items) { //spread operator will turn the into an array
    if (items.length === 1 && Array.isArray(items[0])) //see if the first items is an array
    items = [...items[0]]; //reset items to a new array, and use the spread operator to spread items of 0 which is an array.
    return items.reduce((a, b) => a + b);
};

//challenge pass arguments as an array