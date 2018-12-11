const express= require('express');
var createError = require('http-errors');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var apiRouter = require('./routes/book');


const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RMCDB', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

  app.use('/euser', euser);

app.use('/api/create',(req , res,next)=>{
   const create= [
       {  FirstName: 'this.enteredFirstName',
        LastName:  'this.enteredFirstName',
        Company:  'this.enteredFirstName',
        RoxCode:  'this.enteredFirstName',
        License: 'this.enteredFirstName',
        contact: 'this.enteredFirstName',
        Email: 'this.enteredFirstName',
        Quntity: 'this.enteredFirstName'}

   ];
    res.status(200).json({
        create:create
    });
});

module.exports = app;