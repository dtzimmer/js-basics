//ARRAYS

//adding new elements
//finding elements
//removing elements
//splitting arrays
//combining arrays

//ADDING ELEMENTS********************

// const numbers = [3, 4];

//End
// numbers.push(5, 6);

//Beginning
// numbers.unshift(1, 2)

//End
// numbers.splice(2, 0, 'a', 'b')

// console.log(numbers);

//FINDING ELEMENTS*********************
//PRIMITIVE TYPES

// const numbers = [1, 2, 3, 1, 4];

//console.log(numbers.indexOf('a'));//returns -1 --means it's not there
//console.log(numbers.indexOf(1)); // 0
//console.log(numbers.indexOf(1, 2)); // 3 ---the second parameter tells where the search to begin

//console.log(numbers.indexOf('1')); // -1

//console.log(numbers.lastIndexOf(1));// 3

// console.log(numbers.indexOf(1) !== -1); //true ---means the element exists
// console.log(numbers.includes(1)); //true ---better way than above

//FINDING ELEMENTS*********************
//REFERENCE TYPES

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// courses.includes({ id: 1, name: 'a' }) 
//returns false because they are two different references

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// const course = courses.find(function(course) {
//    return course.name === 'a';
// });

// console.log(course);

//Find Index (use findIndex)
// const course = courses.findIndex(course => course.name === 'a');
 
//  console.log(course);


//REMOVING ELEMENTS*********************

// const numbers = [1, 2, 3, 4];

//End
// const last = numbers.pop()
// console.log(numbers); //[1, 2, 3]
// console.log(last);// 4

//Beginning
// const first = numbers.shift();
// console.log(numbers); //[2, 3]
// console.log(first); //1

//Middle
// const middle = numbers.splice(2, 1);
// console.log(numbers); //[1, 2, 4]

//EMPTYING AN ARRAY********************************
// let numbers = [1, 2, 3, 4];
// let another = numbers; //still point to the old object in memory

//Solution 1 - works if no references to the old array
// numbers = []; //this is a new object in memory

//Solution 2 - Best solution
// numbers.length = 0;

//Solution 3 - Noisy using splice
// numbers.splice(0, numbers.lenth);

//Solution 4 - not optimal for performance
// while (numbers.length > 0)
//     numbers.pop();

// console.log(number);
// console.log(another)

//COMBINING AND SLICING ARRAYS ***************

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined); //[1,2,3,4,5,6]
//Example:
// const slice = combined.slice(2, 4); // the params are start and end indexes

// console.log(combined); //[1, 2, 5, 6]
// console.log(slice); //[3, 4]

//Another Example:

// const slice = combined.slice(2); //get all elements starting at that index. cuts everything before.

//Remember = If primitive they copied by their value
//  but if objects, they are copied by their reference

//THE SPREAD OPERATOR ****************************************

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, 'a', ...second, 'b'];
// [1, 2, 3, 4, 5, 6]

// // const copy = combined.slice();
// const copy = [...combined];

// console.log(combined);
// console.log(copy);
//[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]
//[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]

//ITERATING AN ARRAY *****************
// const numbers = [1, 2, 3];

//One way 'for...of'
// for (let number of numbers)
//     console.log(number);

//2nd way 'forEach'
// numbers.forEach((number, index) => console.log(index, number));    

//JOINING ARRAYS **********************

// Use the join method
//Example:
// const numbers = [1, 2, 3];
// const joined = numbers.join('*');
// //                      this ^ is what you want to join it with
// console.log(joined); //1*2*3

//Use the split method to separate a string

// const message = 'This is my first message';

// const parts = message.split(' ')
// console.log(parts); //[ 'This', 'is', 'my', 'first', 'message' ]

// const combined = parts.join('-');
// console.log(combined);//This-is-my-first-message

// SORTING ARRAYS ************************************
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers); //[ 1, 2, 3 ]

// numbers.reverse();
// console.log(numbers); //[ 3, 2, 1 ]

//Another Example using sort method:
// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript'},
// ];

// courses.sort(function(a, b) { // the function that gets passed into sort is a comparison function
//     const nameA = a.name.toUpperCase(); //ascii table = numerical representations for each character
//     const nameB = b.name.toUpperCase(); //which is why we use .toUpperCase to keep values consistent
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);

//TESTING THE ELEMENTS OF AN ARRAY
// const numbers = [1, 2, 3];

//'EVERY' method - checks to see if every element matches the criteria  
//                               v

// const allPositive = numbers.every(function(value){ //stops at the first failure
//     return value >= 0;
// });

// console.log(allPositive);

//'SOME' method -  checks to see if you have at least one element that matches the criteria    
//                                      v

// const atLeastOnePositive = numbers.some(function(value){ //stops at the first success
//     return value >= 0;
// });

// console.log(atLeastOnePositive);

//FILTERING AN ARRAY *********************************************

// const numbers = [1, -1, 2, 3]

//Long syntax
// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// })

//Short syntax
// const filtered = numbers.filter(n => n >= 0); //numbers where number is greater than or equal to zero

// console.log(filtered); //[ 1, 2, 3 ]

//MAPPING AN ARRAY **************************************************
//map them to something else
// const numbers = [1, -1, 2, 3];

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)   //chaining 
//     .map(obj => obj.value);

// console.log(items); //[2, 3]

//REDUCING AN ARRAY *************************************************
// start with an accumulator then we loop through the array and get the sum of all the numbers
// const numbers = [1, -1, 2, 3]

//OLD -----using the for...of loop
// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum); //5

//using REDUCE
// Start with an accumulator and get a single value

// const sum = numbers.reduce(
//     (accumulator, currentValue) =>  accumulator + currentValue); //if not initial value set, it starts at the beginning of the array.

// console.log(sum); // 5
