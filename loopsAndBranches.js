let array = [1,2,3,4];

//entries function
for (let [index, value] of array.entries()){
    console.log(index, value);
}

let filtered = array.filter(x => x > 2);