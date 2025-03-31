function* inventoryGenerator(){
    yield "Smartphone";
    yield "Tablet";
    yield "Laptop";
}

const inventory = inventoryGenerator();
let done = false;

while(!done){
    const result = inventory.next();
    if(result.done){
        done = true;
    } else {
        console.log(result.value);
    }
}
for (const item of inventoryGenerator()){
    console.log(item);
}

//Store all values in a list
const allItems = [...inventoryGenerator()];
console.log(allItems);

const generator = inventoryGenerator();
try{
    console.log(generator.next());
    inventory.throw("Unexpected interrupt");
    console.log(generator.next());
} catch (error) {
    console.log(error);
}

function* regularOrderGenerator(){
    yield "Order #1001";
    yield "Order #1002";
}

function* expressOrderGenerator(){
    yield "Order #1003";
    yield "Order #1004";
}

function* orderProcessingGenerator(){
    yield* regularOrderGenerator();
    yield* expressOrderGenerator();
}

const orderProcessing = orderProcessingGenerator();
console.log(orderProcessing.next().value);