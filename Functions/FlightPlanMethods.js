class FlightPlanMethods {
    #internalDepartureTime = null;

    constructor(callsign = '', departure = '', destination = '') {
        this.callsign = callsign;
        this.departure = departure;
        this.destination = destination;
    }

    //Getter - zero parameters, used for computed properties and encapsulation
    get departureTime() {
        return this.#internalDepartureTime.toLocaleString();
    }

    printInfo(){
        console.log(this.callsign + " departs from " + this.destination);
    }

    print(){console.log(this)};

    //Setter - also for encapsulation
    setDepartureTime(date) {
        try {
            if (date - Date.now() < 0) {
                throw new Error("Date is in the past");
            }
        } catch (error) {
            console.log(error.message);
        }
        this.#internalDepartureTime = date;

    }
}

const newPlan = new FlightPlanMethods('ABC', 'A', 'B');
newPlan.printInfo();
//Accessed as if it were an object property
const month = 12;
const departureDate = new Date(2024, month, 24, 18, 0);
newPlan.setDepartureTime(departureDate);

newPlan.print();

//Using call function to change the context
function alertPassenger(name){
    console.log(name + " " + this.message);
}

const presentToGateWarning = {
    message: 'Message text here'
}

alertPassenger.call(presentToGateWarning, "Mario Rossi");