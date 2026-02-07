const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path : './.env'})
// console.log(dotenv.config({path : './.env'}));
const app = express();

app.use(express.json());
app.get('/' , (req , res) => {
    res.send('MediVault Backend is running');
})

module.exports = app;