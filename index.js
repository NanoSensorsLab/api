const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mysql = require('mysql'); // import mysql module

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'simpleapi'
})

// make server object that contain port property and the value for our server.
var server = {
  port: process.env.PORT||4040
};

// use the modules
app.use(cors())
app.use(bodyParser.json());

// routers
const usersRouter = require('./routes/users');
// use the modules
app.use(cors())
app.use(bodyParser.json());
// use router
app.use('/users', usersRouter);


// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));

