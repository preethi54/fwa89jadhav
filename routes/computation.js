var express = require('express');
var router = express.Router();


/* GET users listing. */

router.get('/',function(req, res, next) {
    if ('randomNum' in req.query & req.query.randomNum != ''){
        var randomNum = req.query.randomNum;
      }
      else{
        minVal = Math.ceil(0);
        maxVal = Math.floor(10);
        var  randomNum = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);     
     }

    var roundOfNum = Math.round(randomNum);

  res.send(' Math.round()  applied to '+randomNum+' is  :'+roundOfNum);
});

module.exports = router;
