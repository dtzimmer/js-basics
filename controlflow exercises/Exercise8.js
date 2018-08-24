//Sum of Multiples of 3 and 5

console.log(sum(15));

// Multiples of 3: 3, 6, 9 --- add them and get 18
// Multiples of 5: 5 10 ---add them and get 15
//                                   TOTAL = 33        

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;        
}