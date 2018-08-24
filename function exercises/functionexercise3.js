//Error Handling
//if the first argument is not valid
//throw an excetion
//implement a try catch

try{
    const numbers  = [1, 2, 3, 4, 1];
    const count = countOccurrences(numbers, 1); //what if I passed a boolean or null
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error ('Invalid array');

    return array.reduce((accumulator, current) => {
        const occurences = (current === searchElement) ? 1 : 0;
        return accumulator + occurences;
    }, 0);
}