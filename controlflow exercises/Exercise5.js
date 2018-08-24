//Write a function called showNumbers that 
//lists numbers from 1-10 and labels them as
//either even or odd.

//YES!!! I DID IT BY MYSELF!! WAHOO!

showNumbers(20);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++ ) {
    //         if (i % 2 === 0) console.log(i, 'EVEN'); // THIS WAS MY SOLUTION
    //         else console.log(i, 'ODD');

            const message = (i % 2 === 0) ? 'EVEN' : 'ODD'; // THIS is the better alternate solution
            console.log(i, message);
        }
    }