// Tricky Exercise - Train your brain
// Move an element in an array

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array]; //initialize an output array, spread operator to grab all array
    const element = output.splice(index, 1)[0]; //define an element that takes one position from an index and puts the deleted element it in a new array
    output.splice(position, 0, element);
    return output;
}