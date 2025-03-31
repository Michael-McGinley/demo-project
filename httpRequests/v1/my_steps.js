const {Given, When, Then} = require("cucumber");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {get} = require("request");

Given(/^url 'http:\/\/3000'$/, function () {
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();
    const port = 3000;

    let users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "David" },
        { id: 5, name: "Eva" }
    ];

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.send("<h1>This is an api. See /users to see the list.</h1>");
    });
    //app.listen(port, () => console.log(`Running the app. Listening on port ${port}`));
});
Then(/^assert responseStatus == 200$/, function () {
    get('/users', (req, res) => {
        return res.length === 5;
    });
});
When(/^method GET$/, function () {

});