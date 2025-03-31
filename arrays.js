const currentObject = {};

const addBlock = function() {
    if (Array.isArray(currentObject.content)){
        currentObject.content = [];
    }
    currentObject.content.push({id: 0});
};

currentObject.content = [0,1];
let l = currentObject.content.length;
lastElement = currentObject.content[l - 1];
const anotherObject = {...currentObject};
anotherObject.content = [];

currentObject.content.forEach(contentBlock => {
    anotherObject.content.push({...contentBlock});
});

const comparisonFunction = function (a, b){
    if(a.id > b.id) return 1;
    if(b.id > a.id) return -1;
    return 0;
}
currentObject.content.sort(comparisonFunction);

let foundElement;
let idToSearch = 123;

for (let i = 0; i < currentObject.content; i++) {
    if (currentObject.content[i].id === idToSearch){
        foundElement = currentObject.content[i];
        break;
    }
}

currentObject.content.forEach((element, index) => {
    element.id += index;
});
//Maps have key-value pairs where keys and values are anything

let array = [1,2,3,4];
console.log(array.join(" "));

let total = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

array.includes(3);
let exampleID = {id: 123};
currentObject.content.includes(exampleID);
foundElement = currentObject.content.find(element => {
    return element.id === idToSearch;
});

function addOne(element){
    return element += 1
}
console.log(array.map(addOne));