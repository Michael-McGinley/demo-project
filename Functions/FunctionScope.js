let maxAltitude = 10000;

const changeAltitude = (alt) => {
    let minAlt = 0; //Local variable
    if(alt < maxAltitude && alt > minAlt) {
        console.log("Changing altitude to " + alt);
        return;
    }
    console.log("Out of bounds");
}


console.log(this);