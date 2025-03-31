import fs from "node:fs/promises";

const myHeaders = new Headers();
myHeaders.append("apikey", "e198eaa241647f66893ee630f9b5ade0");

const reqyestOptions = {
    method: 'GET',
    redirect: 'follow',
    myHeaders
};

async function getCurrency() {
    const result = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e198eaa241647f66893ee630f9b5ade0", reqyestOptions);
    const resyltObj = await result.json();
    console.log(JSON.stringify(resyltObj, null, 2));
    return resyltObj;
}
async function loadData(){
    try {
        const data = await fs.readFile('./file1.json', 'utf-8');
        const dataObj = JSON.parse(data);
        console.log(dataObj)
    } catch (err) {
        throw err;
    }
}


Promise.all([getCurrency(), loadData()]).then(() => {
    console.log("All data loaded");
    });