const express = require('express');
const app = express();
const port = 3000;

async function mockAPIQuery() {
    return [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
}

async function* getDatabaseRecords() {
    const records = await mockAPIQuery();
    for (const record of records) {
        yield record;
    }
}

app.get('/log-records', async (req, res) => {
    try {
        const recordsGenerator = getDatabaseRecords();

        console.log('Logging records received from the API:');
        for await (const record of recordsGenerator) {
            console.log(record);
        }
        res.send('<h1>Records have been logged in the console.</h1>');
    } catch (error) {
        console.error('Error fetching records:', error);
        res.status(500).send('An error occurred while logging records.');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

function* errorProneGenerator(){
    try {
        yield "Start Inventory Check";
        throw new Error("Unexpected error");
    } catch (error) {
        yield error.message;
    }
    yield "End inventory check";
}

for (let item of errorProneGenerator()){
    console.log(item);
}