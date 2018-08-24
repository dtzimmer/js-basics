    // //This is my first JavaScript Code
    // console.log('Hello World');

    // let name = 'Daniel';
    // console.log(name);

    //VARIABLE RULES
    //cannot use reserved keywords
    //should be meaningful/descriptive
    //cannot start with a number
    //cannot contain space or hyphen
        // e.g. firstName (camelcase)
    //they are case sensitive
    //best to declare variables on separate lines 
//LET AND CONST
    // const interestRate = 0.3;
    // let interestRate=1;

    //use let if you need to reassign a variable
    //use const if you do not need to reassign a variable

//PRIMITIVES (5 types)
// let name = 'Daniel' //String Literal
// let age = 30//Number literal
// let isApproved = true; //Boolean Literal
// let firstName= undefined; //not used like this typically
// let selectedColor= null; //null is used to clear the value of a variable    
//NEW in ES6 is Symbols

//LANGUAGES
//Dynamic =  let name = 'John
//Static = string name = 'John

//REFERENCE TYPES - Objects, Arrays, and Function**************
//#1 OBJECTS -----------------------------

// let name = 'Dan';
// let age = 30;
// ...can be changed to...
// let person = {
//     name: 'Dan',
//     age: 30
// };//<-----called an object literal

//Dot notation -- typically you will use this notation
// person.name = 'Bob';

//Bracket notation ---Would be used if user is making a selection
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name); //or console.log(person['name']);

//#2 ARRAYS ------------------------
//Arrays are a typeof object
//Data structure used to represent a list of items
//access properties of arrays by using dot notation
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors.length);

//#3 FUNCTIONS ----------------------
//set of statements that either performs a task or calculates and returns a value 
//parameters are only meaningful to this function
//              Parameters
//                 |
//                 v

// Performing a Task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

//Calculate a value
// function square(number) {
//     return number * number;
// }

// console.log(square(2));

// greet('Daniel', 'Zimmerman');
// greet('Bob', 'Vance');

//          ^
//          |
//       arguments
//

//Operators
// Arithmetic, Assignment, Comparison, Logical, Bitwise
//
// Arithmetic Operators
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Incrememnt (++) It matters if it's before (11) or after (10---11)
// console.log(++x);

// Decrement (--)
// console.log(--x);

//ASSIGNMENT OPERATORS

//let x = 10;

// x = x +5;//
// x += 5;// THESE are the same

// x = x * 3;
// x *= 3;

//COMPARISON OPERATORS

// let x = 1;

// //Relational Operators ---Return a Boolean value
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // Equality Operators
// console.log(x === 1);
// console.log(x !== 1);

//EQUALITY OPERATORS

//Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

//Loose Equality (doesn't care about the type, will coerce)
// console.log(1 == 1); //TRUE
// console.log('1' == 1); //TRUE
// console.log(true == 1); //TRUE

//TERNARY OPERATORS -------------------------

//If a customer has more than 100 points,
//they are a 'gold' customer, otherwise,
//they are a 'silver' customer.

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver'; //if the expression is true then gold, otherwise silver.

// console.log(type);

//LOGICAL OPERATORS (AND OR or NOT)----------------------------
//Logical AND &&
//Returns TRUE if both operands are TRUE

// console.log(false && true);// False
// console.log(true && true);// True

//Logical OR ||

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore; //True

// console.log('Eligible', eligibleForLoan);

// //NOT (!)
// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused', applicationRefused);

//FALSY Values
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// false || true 
// true

// false || 'Mosh'
// "Mosh"

// false || 1
// 1

// Short-circuiting*** as soon as it finds a truthy, then it stops and ignores the rest
// false || 1 || 2
// 1 
// EXAMPLE OF USING IT....
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

//BITWISE OPERATORS

//1 = 00000001 - 8 bits equals 1 byte
//2 = 00000010 
//3 = 00000011
//0 = 00000000

// console.log( 1 | 2 ); //Bitwise "OR"
// console.log( 1 & 2 ); //Bitwise "AND"

// Read, Write, Execute
// 00000100 - Has read permission
// 00000110 - Has write permission
// 00000111 - Has execute permission

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | writePermission;

// let message = (myPermission & readPermission) ? 'yes' : 'no';

// console.log(message); //no

//OPERATORS PRECEDENCE ------------------------------------
//Example...
// let x = (2 + 3) * 4; //basic order of operation applice in with operators

// console.log(x); //20 but if there is not parenthesis then its 14

//EXERCISE

// let a = 'red';
// let b = 'blue';

// let c = a; //now c equal red
// a = b; //now a can be reassigned to b which is blue
// b = c; //now reassigned to c which is red

// console.log(a);
// console.log(b);

