//Initialize an address object first using a factory function
//then use a constructor function

// let address = createAddress('1234', 'SuperCity', '01983')

// console.log(address);

// //Factory function
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode,
//     };
// }

//Constructor Function - use pascal

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address = new Address('1234', 'SuperCity', '01983');
// console.log(address);

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