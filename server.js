const express = require('express');//access express library
const cors = require('cors');
const app = express();//create an instance of express
const port = process.env.PORT || 3001;//set the port

//enable CORS
app.use(cors());

//import mock data
const cards = require('./data/mock.js');
const functionData = require('./data/mockfunction.js');

// Define a route to get all cards
app.get('/cards', (req, res) => {
    res.json(cards);
});

// Define a route to get all functions
app.get('/functionData', (req, res) => {
    res.json(functionData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});