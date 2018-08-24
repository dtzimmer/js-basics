//Create a function called count occurrences
//that counts how many times an element occurs in an array

//I don't quite understand reduce...... :(

const numbers  = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, -1);

console.log(count);

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)     //one implementation, but simpler with REDUCE
    //         count++;
    // return count;

    array.reduce((accumulator, current) => {
        const occurences = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement)
        return accumulator + occurences;
    }, 0);
}