//Make an address object and display
//its properties.

const address = {
    street: '1234 America Dr.',
    city: 'Super City',
    zipCode: '12345'
};

function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);