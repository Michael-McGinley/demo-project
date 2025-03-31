import fs from 'node:fs/promises';
import fsc from 'node:fs';

const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fsc.readFile('file1.json', 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
}

fs.readFile('./file1.json', 'utf8')
    .then(() => readFile('file1.json'))
    .then((data) => console.log(data))
    .catch(err => {
        throw err;
    });

const data = JSON.stringify({
    "id": 53,
    "name": 'Dave'
});
