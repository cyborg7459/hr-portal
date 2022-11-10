const express = require('express');

const app = express();
app.use(express.json());

app.get('/', function(req, res, next){
    res.status(200).send("Home page");
});

module.exports = app;




