const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cs5610:cs5610@homekitchen.cu5xu.mongodb.net/homekitchen?retryWrites=true&w=majority',
    {useNewUrlParser: true});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/hello', function(req, res){
    res.send('hello world'); });


const session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(function (req,res,next) {
    // const allowedOrigins = ['http://localhost:3000/','https://homekitchen.herokuapp.com/','http://localhost:3001/'];
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)){
    //     res.setHeader('Access-Control-Allow-Origin',origin);
    // }
    res.header('Access-Control-Allow-Origin',"http://localhost:3000/");
    res.header('Access-Control-Allow-Credentials','true')
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested_With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    next();
})

require("./controllers/recipes.controllers.server")(app)
require("./controllers/orders.controllers.server")(app)
require("./controllers/express.session")(app)
require("./controllers/users.controller.server")(app)

// app.listen(process.env.PORT || 8080);

