//Implement the function checkSpeed

//Speed Limit = 70
// if under get the ok message
// for every 5 km above the speed limit, they get 1 point
// If the driver gets more that 12 points (180 km)--> license suspended

// Math.floor(1.3) //rounds the number

checkSpeed(120);

function checkSpeed(speed) {
    const speedLimit = 70; //good to declare a constant that 
    const kmPerPoint= 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else 
        console.log('Points', points);
    }

