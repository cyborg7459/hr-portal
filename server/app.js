const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res, next){
    res.status(200).send("Home page");
});


module.exports = app;




