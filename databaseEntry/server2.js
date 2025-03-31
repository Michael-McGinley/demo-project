const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
});


(async () => {
    await sequelize.sync({ force: true }); // WARNING: This will delete all existing data in the table.
    console.log('User model was synced successfully.');
})();
// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});
// Sync the model with the database


const express = require('express');
const app = express();
app.use(express.json());

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
        console.log(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

(async () => {
    await User.create({ name: 'John Doe', email: 'john.doe@example.com' });
    await User.create({ name: 'Jane Smith', email: 'jane.smith@example.com' });
})();