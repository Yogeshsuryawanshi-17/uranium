const { query } = require('express');
const express = require('express');
const logger = require('./logger')

const router = express.Router();

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

router.get('/all-candidates', function (req, res) {
    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)
     //res.send('My first ever api!')
   

   
  res.send(arr1)   
});
router.get('/candidates', function (req, res){
  
         

 const cntarr = req.query.count;
 const arr = [];
   for(let i=0;i<arr1.length;i++)
   {

     if(cntarr>i)
      {

         arr[i] = arr1[i]
          
      }
         
   }
   
res.send(arr)


});




module.exports = router;
// adding this comment for no reason