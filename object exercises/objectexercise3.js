//Use the constructor function 
//to create two address objects

let address1 = new Address('1234', 'SuperCity', '01983');
let address2 = new Address('1234', 'SuperCity', '01983');
let address3 = address1;


console.log(areEqual(address1, address2)); //true referencing the same object
console.log(areSame(address1, address2));  //false they are two different objects in memory
console.log(areSame(address1, address3)); // true because they are referencing the same object
//Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}