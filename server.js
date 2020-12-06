var express = require('express');
var app = express();
app.get('/hello', function(req, res){
    res.send('hello world'); });

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/kitchen', {useNewUrlParser: true});


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested_With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
})

require("./controllers/recipes.controllers.server")(app)
require("./controllers/orders.controllers.server")(app)

app.listen(3000);
