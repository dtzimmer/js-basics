//STARS
//Create a function that adds stars in a row
//incrementing by one each time.
// *
// **
// ***
// etc etc

showStars(30);

function showStars(rows) {
    for (let row = 1; row <= rows; row++ ){
        let pattern = '';
        for (let i = 0; i < row; i++) //Nested for loops because we are incrementing both rows and stars
            pattern += '*';
        console.log(pattern);    
    }
}

//My initial idea ---didn't work
// function showStars(rows) {
//     const star = '*';
//     let i = 0;
        
//     do {
//         if (i < rows) console.log('*');
//         i++ 
//     } while (i <= rows) 
// }