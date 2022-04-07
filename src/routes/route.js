const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/t', function (req, res) {
    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
     //res.send('My first ever api!')

   const arr1 =[
          'Yogesh',
          'managesh',
          'ganesh',
          'pratik',
          'anil',
          'richcard',
          'rita',
          'shrdhha',
          'sunil',
          'shubhangi'
   ]

  //res.send(arr1)
 



  res.send(req.query)

  res.send(arr1.length=req.query)
   
     

});




module.exports = router;
// adding this comment for no reason