const express = require('express');
const Sequelize = require('sequelize');
const _USERS = require('./randomData.json');
const sqlite = require('sqlite3');
const Op = Sequelize.Op;

const app = express();
const port = 8001;

const connection = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    define: {
        timestamps: false
    }
});

app.listen(port, () =>{
    console.log('Running server on port ' + port);
});

const findName = {
    name: {
        [Op.like]: 'Ca%'
    }
};

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
        console.log(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const User = connection.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    alphanumeric: Sequelize.STRING
});

const userObject = {
     name: 'Named Individual',
     email: 'email@email.com',
     alphanumeric: 'Password123'
};

connection
    .sync({
        logging: console.log,
    })
    .then(() => {
        console.log('Connection to database established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err);
    });