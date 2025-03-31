//Function is a block of code that executes a specific task

//Function declaration
//Galleons is parameter, 10 is the argument with 0 as default parameter
function convertToLitres(galleons = 0){
    return galleons * 3.785;
}

function printTime() {
    console.log(new Date().toLocaleTimeString());
}

//Function expression assigned to a variable - must be declared before use
const litres = function(galleons){
    return galleons * 3.785;
};

let result = litres(10);

//Arrow function - cannot be constructor function, no 'this' binding
const arrowLitres = galleons => galleons * 3.785;

//Recursion - call itself, stop condition
function decrementAlititude(alt){
    if(alt > 0){
        decrementAlititude(alt - 100);
    }
}

const createFlightEntry = function(flight, from, status, colour='lightgreen'){
    //Code here to display the information
}

//Rest parameter
const displayFlights = function(...flights){
    flights.forEach(f => {
        createFlightEntry(f.flight, f.from, f.status, f.colour);
    });
}