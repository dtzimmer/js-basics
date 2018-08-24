//Writes a function that does what the includes 
//build in method does.

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 2));

function includes(array, searchElement) { //create a function that takes in two params, an array and a search element
    for (let element of array) //iterate over the elements in the array
        if (element === searchElement) //if the element is strict equal to the search element
            return true;  //return true, meaning it is included in the array
    return false;        //otherwise return false
}

