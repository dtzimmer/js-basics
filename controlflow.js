//CONDITIONAL STATEMENTS
// 2 TYPES

//OPTION #1
// If...else
//Hour
// If hour is between 6am and 12pm : Good Morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statment
// }
// else if (yetAnotherCondition)
//     statement
// else
//     statment   

//EXAMPLE of If...else

// let hour = 25;    

// if (hour >= 6 && hour < 12) 
//     console.log('Good morning');
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon');
// else if (hour >= 18 && hour < 24)
//     console.log('Good Evening');
// else
//     console.log('That is not a valid time')   

//OPTION #2
// Switch...case

// let role = 'moderator';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//     case 'moderator':
//         console.log('Moderator User');
//         break;
    
//     default:
//         console.log('Unknown User');    
// }

// *******If you did the same as above but in If...else

// if (role === 'guest') console.log('Guest')
// else if (role === 'moderator') console.log('Moderator')
// else console.log('Unknown User')

//FOR LOOPS **************************

// console.log('Hello World') X5 

//Loops repeated an action

//initialExpression
//       |
//       |      condition
//       |          |
//       v          v
// for (let i = 0; i <= 5; i++ ) {
//     if (i % 2 !== 0) console.log(i);
// } //output: 1 3 5

// Another example
// for (let i = 5; i >= 1; i-- ) {
//     if (i % 2 !== 0) console.log(i);
// } //outputs 5 3 1 
//

//WHILE LOOPS ***********************

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++
// }

//direct translation of the for loop from above.

//DO...WHILE LOOPS (not common, but occassionally used in coding) *****
//These are always executed at least once no matter what

// let i = 9;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//INFINITE LOOPS ***********************
// BAD>>>>>>>>>>
// Executes forever. Crashes your browser.
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     //i++ <-----Don't forget this
// }

// while (true) {

// }

// let x = 0;
// do {
//     //x++
// } while (x < 5)

// for (let i = 0; i < 10; )

//FOR...IN LOOP*********************
//Used to iterate over the properties of an object
//
//Example:
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for(let index in colors)
//     console.log(index, colors[index]);

//Dot Notation
//person.name

//Bracket Notation ----Have to use this for 'For...in Loops'
//person['name']

//FOR...OF LOOP (new in ES6) ***************
//used to iterate over the elements or items in an array.
// for (let color of colors)
//     console.log(color);

//BREAK AND CONTINUE****************
//Old legacy thing. Not recommended
//Break - jump out of a loop
//Continue - jump to the next iteration

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i ++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
