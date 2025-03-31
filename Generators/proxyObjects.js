const customer = {
    firstName: "",
    lastName: "",
    phone: "",
    companyName: ""
};

const handler = {
    set(target, prop, val){
        if(prop === "firstName") {
            target[prop] = val;
        }
        return true;
    },
    get: (target, prop) => {
        console.log("Getting property");
        return target[prop];
    }
}
const custProxy = new Proxy(customer, handler);
custProxy.firstName = "Sean";
console.log(custProxy.firstName);
console.log(customer.firstName);