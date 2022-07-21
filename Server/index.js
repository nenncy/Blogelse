const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('mongoose');
const dotenv=require('dotenv');
const bodyparser = require('body-parser');

dotenv.config({path:'./config.env'});


let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    } else {
      next();
    }
  };
  
  app.use(allowCrossDomain);
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(cors());


const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api',require('./Controllers/user'));
app.use('/',require('./Controllers/Password'));
app.use('/',require('./Controllers/Plans'));
app.use('/',require('./Controllers/PLanfeature'))
app.use('/',require('./Controllers/Location'));


//mongo connection 

mongoose.connect("mongodb+srv://nency:nency@cluster0.sngnrkt.mongodb.net/Blogelse",{ useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});