const express = require('express');
const authController = require("./controllers/authController")
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')

dotenv.config({path : './.env'})
const app = express();

app.use(express.json());
app.get('/' , (req , res) => {
    res.send('MediVault Backend is running');
})

app.use('/api/v1/users' , userRoutes)

module.exports = app;