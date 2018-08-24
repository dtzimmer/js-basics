// OBJECT BASICS
// Purpose: to group related variables and functions operate on those variables.

//This is called Object-oriented Programming (OOP)
//circle.draw(); // Method is correct term for a function called inside a object

//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//FACTORY FUNCTIONS = produce objects

// function createCircle(radius) {
//     return {
//         radius,
//         draw () {                //Single place to fix function if there are bugs
//             console.log('draw');
//         }
//     };
// }

//const myCircle = createCircle(1);

// const circle1 = createCircle(1);
//     console.log(circle1);

// const circle2 = createCircle(2);
//     console.log(circle2);

//CONSTRUCTOR FUNCTIONS -- to construct or create an object --use Pascal Notation (see above)
//THE KEY WORD 'this' references to the object that is executing this piece of code

//In JS our objects are dynamic. We can add additional properites to them

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

//THREE THINGS that happen when you use the 'new' keyword
//
//#1 - Creates an empty object
//#2 - set 'this' to point to that object
//#3 - return that object from that function

//Both patterns are good. Preference thing.
// Factory - call - return a new object - use Camel Notation
// Constructor - new operator - use the this key word - use Pascal

//DYNAMIC NATURE OF OBJECTS

// const circle = {            // Is this a const if it's changing?
//     radius: 1               // It cannot be reassigned (e.g. like to an empty object), or you would get an error
// };                          //

// circle.color = 'yellow';     // Added a property using dot notation
// circle.draw = function() {}

// delete circle.color;         // Deleted a property using delete and dot notation
// delete circle.draw;

// console.log(circle);

//CONSTRUCTOR PROPERTY 
//
// let x = {};

// let x = new Object(); // Javascript translates the above as <-------

// new String(); // '', "", ``          // These are string literals = using them is cleaner than using the constructor
// new Boolean(); // true, false        // Boolean literals
// new Number(); // 1, 2, 3, ...        // number literals

//***Take away = Every object has a constructor property and that references the function that was used to create that object.

//FUNCTIONS ARE OBJECTS ****************

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
//       'this' will refernce this empty object
//              |
//              v
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

//Circle.name ===> returns name of the function
//Circle.length ===> returns the number of arguments

//Circle.constructor ===> JS uses this function constuctor to create the object

// const another = new Circle1(1);

// const another = new Circle(1);

//VALUES AND REFERENCE TYPES **************************

// VALUE TYPES
//Number
//String
//Boolen
//Symbol
//undefined
//null

//REFERENCE TYPES
//Object
//Function
//Array

// PRIMITIVES and objects behave differently

// let x = 10;
// let y = x; //x and y are completely independent of each other

// x = 20; //return x as 20 and y as 10

//change it to an OBJECT or REFERENCE type
// let x = { value: 10};
// let y = x; //x and y are pointing to the same object in memory

// x.value = 20; //returns x as 20 and y as 20

//Take away ************
// Primitives are copied by their value
// Objects are copied by their reference

// let obj = { value: 10};

// function increase(obj) {
//     obj ++;
// }

// increase(obj);
// console.log(obj);

//return 11 because the object value is the single reference

//ENUMERATING PROPERTIES OF AN OBJECT *******************

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
//     console.log(key, circle[key]); //Returns radius 1 and draw f

// for (let key of Object.keys(circle)) //keys return a string array
//     console.log(key); //This turns it into an array because array can be iterated over
    
// for (let entry of Object.entries(circle)) //'entries' returns each key value pair as an array
//     console.log(entry); 

// if ('radius' in circle) console.log('yes');  //use the 'in' operator to see if a property exist in an object  

//CLONING AN OBJECT

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };
// first example:
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];
//another ['radius'] = circle['radius'];
//

// second example:
// const another = Object.assign({}, circle);

//third example:
//spread operator ... to spread the circle object
// it takes all the properties and methods and copies them
//
// const another = { ...circle};

// console.log(another);

//GARBAGE COLLECTION 

//memory allocation happens behind the scences.
//it figures out what variables are not used and deallocates their memory

//MATH OBJECT
// Google javascipt math

//There's a list of properties of the math object on MDN
//Built in to JS
//See what methods you can use

//Example of Math.random()
//
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min);
//   }

// const answer = getRandomArbitrary(1,9);

// console.log(answer)

//STRING - two kinds of strings
// const message = 'This is my first message'; //string primitive
             //message. turns the primitive string into an object
//message.length ---24
//message[0] ---  'T'
//message include('not') ----false
//message endsWith('e') -----true
//message.replace('first', 'last') ----replaces the word
//message.toUpperCase() -----changes it all to uppercase
//message.trim() --- gets rid of white space before and after
//message.split(' ') turns a string into an array separating each word


//ESCAPE NOTATION
// const message = 'This is my \'first message\''
// console.log(message); //This is my 'first message'

//string object - look at docs on MDN
// const another = new String('hi');

//Another example of escape notation
// const message = 
// 'This is my\n' + //concatonate
// 'first message';
//THIS IS UGLY CODE ^

//TEMPLATE LITERALS **********************
//Object {}
//Boolean true false
//String '', ""
//Template `` -----uses back ticks

//This uses template literals
// const name = 'Bob Vance'

// const another = 
// `Hi ${name},

// Thank you for joining my mailing list.

// Regards,
// Dan`;

// console.log(another);

// use ${} to insert any expression that returns a value

//DATE OBJECTS ********************************
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
// now.toTimeString();
// now.toDateString();

// now.toISOString() // used for mobile applications

