const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kitchen',
    {useNewUrlParser: true});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/hello', function(req, res){
    res.send('hello world'); });
app.listen(3000);

// app.use(function (req,res,next) {
//     res.header('Access-Control-Allow-Origin',"*");
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested_With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET,POST,PUT,PATCH,DELETE,OPTIONS');
//     next();
// })

require("./controllers/users.controller.server")(app)
