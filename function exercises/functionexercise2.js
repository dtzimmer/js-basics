// Area of Circle
//Create a circle object using the object literal syntax
//circle.radius = 2;
//circle.area = 20; should be a read only--- should able to console.log it.
//area of circle = PIr^2


const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area)