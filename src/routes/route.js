const express = require('express');
const logger =  require('../logger/logger');
const router = express.Router();


router.get('/test-me', function (req, res) {
  
  
   // console.log("insie first")
    //console.log("calling logging function")
    res.send('My first ever api!')
    logger.call();
    
});
router.get('/test-me1', function (req, res) {git 
    res.send('My first ever api 2!')
});

module.exports = router;
// adding this comment for no reason