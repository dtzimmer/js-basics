//Create a function that shows all the prime 
//numbers up to the argument passed in.

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit ; number++) 
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;

    return true;
}

// My original shot at it (didn't work :()
// function showPrimes(limit) {
//     for (let i = 2; i <= limit ; i++ ) {
//         if (i % 2 !== 0) 
//         if (i % 3 !== 0)
//         if (i % 4 !== 0)
//         if (i % 5 !== 0)
//         if (i % 6 !== 0)
//         if (i % 7 !== 0)
//         if (i % 8 !== 0)
//         if (i % 9 !== 0)
//         return (console.log(i));
//     }
// }