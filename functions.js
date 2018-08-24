//FUNCTIONS

//FUNCTION DECLARATIONS VS EXPRESSIONS ************************

// Function Declaration
// function walk() {
    // console.log('walk');
// } //we usually don't end function declarations with a semi-colon

//Anonymous Function Expression  - we can set variables to functions, and functions are objects
// let run = function () {
    // console.log('run');
// };

// run(); // call it by making a reference to it 

// let move = run;

//now we can use either...
// run();
// move();

//HOISTING ***********************************************
//DEFINITION: The process of moving function declaration to the top of the file. Done automatically
 
// Function Declaration
//difference is we can call before the function

// walk();

// function walk() {
    // console.log('walk');
// }

//Anonymous Function Expression  - 
//CANNOT call before the function expression. get an ERROR. like calling a variable before it is defined.
// run();

// let run = function () {
    // console.log('run');
// };

// ARGUMENTS ***************************************************************
// have iterators, and built in keys

// function sum(a, b) {
//     return a + b; //1+ undefined = NaN
// }

// console.log(sum(1))
//___________________________________________________
// function sum(a, b) {
//     return a + b; //only takes the first 2
// }

// console.log(sum(1, 2, 3, 4, 5));
//____________________________________________________

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));
//_______________________________________________________
//THE REST OPERATOR **************************************************************
// A spread operator used inside a functions parameter is called a rest operator
// function sum(discount, ...prices) { // you can add a varying amount of arguments ----- you must use the rest operator the last parameter. Get's the 'rest' ...get it?
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));
//_______________________________________________________
//DEFAULT PARAMETERS*************************************************************
//
// function interest(principal, rate = 3.5, years = 5) {// set default values in the parameter. Must define every one after the first default
//     return principal * rate /100 * years;
// }

// console.log(interest(10000, 3.5, 5)); //1750
//________________________________________________________
//GETTERS AND SETTERS *************************************************************

// const person = {
//     firstName: 'Dan',
//     lastName: 'Zimmerman',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//        const parts = value.split(' ');
//        this.firstName = parts[0];
//        this.lastName = parts [1];
//     }
// };

// person.fullName = 'Bob Vance';

//getters => access properties of an object
//setters => change (mutate) them

// console.log(person.fullName);
//__________________________________________________________-
// TRY and Catch
//Basic Error handling in Javascript
// When you 'throw and error' that is called an exception
// const person = {
//     firstName: 'Dan',
//     lastName: 'Zimmerman',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string'); //Error is a constuctor function 

//        const parts = value.split(' ');
//        if (parts.length !== 2)
//         throw new Error('Enter a first and last name')
//        this.firstName = parts[0];
//        this.lastName = parts [1];
//     }
// };

// try{
// person.fullName = '';
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);
//_____________________________________________________________________
//LOCAL VS GLOBAL SCOPE ******************************************************
//scope determines where that variable or constant is available
//it is limited to the block that it is defined.

// const color = 'red'; //This is accessible in the global scope

// function start() {
//     const message = 'hi';//valid to have because they're in different scopes
//     const color = 'blue'; //local constants take precidence over global but NOT good practice
//     console.log(color);
// }

// function stop () {
//     const message = 'bye'; //valid to have because they're in different scopes
// }

// start();

//Example:

// for (let i = 0; i < 5; i++){
//     console.log(i); // only accessible inside the scope
// }

//Example:

// if (true) {
//     const another = 'bye';// another only available in this block
// }

//LET VS VAR *************************************************
// There are problems with var and we should avoid

// function start() {
//     for (let i = 0; i<5 ; i++){ //if you use var it mistakened and allow to use out of the scope
//         if (true) {
//             var color = 'red';
//         }
//     }

//     console.log(color);// it is accessible because of var. BAD...
// }

//var => function-scoped variables
//ES6 uses let and const with are block scoped variable

//Another Example:

// var color = 'red'; //var attaches the color variable to the window object
// let age = 30; // the global variable is not attached to the window

//the window object is central.
//Avoid adding stuff to the window object

// function sayHi() {   // this is bad because it is attached to the window.
//     console.log('hi');// will learn how to fix in future lecture
// }

//THE 'THIS' KEYWORD ********************************************
//'this' = references the object that is executing the current function

//method -> this references the obj itself

// const video = {
//     title: 'a',
//     play() {
//         console.log(this); // we see the video object on the console
//     }
// };

// video.stop = function() { 
//     console.log(this); // we see the video object on the console here too
// };

// video.play()
//______________________________________________________________
//function -> this references the global which is the window object or global object in NODE

// const video = {
//     title: 'a',
//     play() {
//         console.log(this); // we see the video object on the console
//     }
// };

// function playVideo() { 
//     console.log(this); // Window object here.
// }
// video.play()// Window object here

//What about the constructor function ________________________________
//example
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video() { 
//     this.title = title;
//     console.log(this); // Window object here.
// }
// const v = new Video('a'); //any object, a separate one from the const video object on line 226 
// when you use the new operator, it creates a new empty object
// it sets this in the constructor function to point to the empty object so it sets the title property to the new object
//REcap when dealing with a regular function, 'this' references the global object
//but if you use the new operator, this references a new empty object.

//last example: ________________________________________

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag){ //this anonymous function is referencing the global object
//             console.log(this.title, tag)
//         }, this); //now we are in the execution context of the showTags
//     }
// };

// video.showTags(); //will show the title next to each tag.

//CHANGING THIS ***************************************************

//1st approach - you'll see in industry, but NOT good
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;   <----------------HERE
//         this.tags.forEach(function(tag){ 
//             console.log(self.title, tag)
//         }); 
//     }
// };

// video.showTags(); 
//______________________________________________________________________
//2nd approach - Using Call, Apply, or Bind

// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'Dan' }); //new object //pass arguments regularly, with commas separating each element
// playVideo.apply({ name: 'Dan' }); //new object //apply is different because you have to pass any additional arguments as an array
// playVideo.bind({ name: 'Dan'})(); //returns a new function and set this to point to this object PERMANENTLY
// fn();

// playVideo(); //this references the window object with a normal function call

//Back to previous example now...

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag){ 
//             console.log(this.title, tag)
//         }.bind(this)); <----- add this HERE
//     }
// };

// video.showTags(); // shows the title next to the tags
//_______________________________________________________________________
//3rd Approach --- Use an Arrow function (NEW syntax)

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(tag => {  //changed to an arrow function. Arrow functions inherit this from the containing function
//             console.log(this.title, tag) //this is NOT rebound to a new object like it is by default
//         });
//     }
// };

// video.showTags(); // shows the title next to the tags
//_________________________________________________________________________
