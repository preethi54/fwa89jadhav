var express = require('express');
var mydataRouter = express.Router();

/* GET home page. */
mydataRouter.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Preethi Jadhav' });
});

module.exports = mydataRouter;
