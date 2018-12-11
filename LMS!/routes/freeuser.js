var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Freeuser = require('../models/Freeuser');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {    
  Freeuser.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Freeuser.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Freeuser.create(req.body, function (err, post) {
    console.log('req.body:',req.body.license)
    users_para_email = req.body.email
    s_license =  req.body.license
    para_RoxCode = req.body.roxcode
    console.log('EmailData',users_para_email)
  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'roxbot.admin@roxai.com',
    pass: 'roxbot123' 
  }
});

var mailOptions = {
  from: 'roxbot.admin@roxai.com',
  to: users_para_email,
  subject: 'Trial License Management System',
  html: '<!DOCTYPE html>'+
        '<html><head><title><h2>RoxAI Lincense</h2></title>'+
        '</head><body><div>'+
      
        '<p>Hi RoxBot SuperAdminTest1 Test,</p>'+
        '<p><b><u>Welcome to License Management System For Free Trial</u></b></p>'+
        
        '<p>Your license for<b> RoxBot</b> has been created. </p>'+
        '<p>Here are your License details</p>'+
        '<p><b><u>Your License:</u></b></p>'+ s_license +
        '<p><b><u>RoxCode:</u></b></p>'+ para_RoxCode +
        '</br>'+
        '<p>From,</p>'+
        '<p>Roxai Technical Team</p>'+
        '<p>Contact Us</p>'+
        '<p>roxbot.admin@roxai.com</p>'+
        '</div></body></html>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    if (err) return next(err);
    res.json(post);
        });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Freeuser.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Freeuser.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;