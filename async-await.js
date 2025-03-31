import fs from 'node:fs/promises';

async function loadData(){
    try {
        const data = await fs.readFile('./file1.json', 'utf-8');
        const dataObj = JSON.parse(data);
        console.log(dataObj)
    } catch (err) {
        throw err;
    }
}

await loadData();