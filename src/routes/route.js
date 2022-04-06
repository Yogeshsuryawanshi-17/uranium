const express = require('express');
const router = express.Router();
const logger =  require('../logger/logger');
const helper =  require('../util/helper');
const validate = require('../validator/formatter');
const _  = require("lodash");
const { request } = require('express');




router.get('/test-me', function (req, res) {
  
  
   // console.log("insie first")
    //console.log("calling logging function")
    res.send('My first ever api!')
    //logger folder call 
    console.log("\n")
    console.log("PROBLEM 1 MODULE1 : SRC/LOGGER/LOGGER.JS CONTAINING THE FOLLOWING EXPORTED FUNCTION")
    logger.call();
    //util folder call
    console.log("\n")
    console.log("PROBLEM 2 MODULE 2 : SRC/UTIL/HELPER.JS")

    helper.date();
    helper.month();
    helper.batch();
    //validator folder call
    console.log("\n")
    console.log("PROBLEM 3 MODULE 3: SRC/VALIDATOR/FORMATTER.JS")
    validate.formatter();


    
});



router.get ('/hello',function(req, res){

    res.send("My hello lodash api");

    //Create an array of strings containing the names all the months of a year and
//split the array into 4 equally sized sub-arrays using the chunk function. Print
//these sub-arrays

    const Monthsofyear =[
        'January', 
        'February',
         'March', 
         'April', 
         'May', 
         'June',
          'July', 
          'August', 
          'September', 
          'October',
           'November',
            'December'
    ]

    
    const montharraysplit = _.chunk(Monthsofyear,3)
    console.log("\n ARRAY INTO FOUR EQUAL SIZED SUBARRAY'S USING _CHUNK FCUNTION");
    console.log("hello route handler problem_1");
    console.log("\n");
    console.log(montharraysplit);

  //  Create an array containing the first 10 odd numbers. Using the tail function,
   // return the last 9 elements of it and print them on console

   console.log("\n");
    const first10odd =[1,3,5,7,9,11,13,15,17,19 ];
    console.log("RETURNING THE REMAINING ODD ELEMENTS USING TAIL FUNCTION");
    console.log("hello route handler problem_2");
    console.log(_.tail(first10odd));


    /*Create 5 arrays of numbers containing a few duplicate values. Using the
    function union create a merged array with only unique values and print them*/
    console.log("\n USING THE FUNCTION UNION CREATE A MERGED ARRAY WITH ONLY UNIQUE VALUES")
    console.log(_.union([2],[1,2],[1,2,3],[1,2,3,4],[1,2,3,4,5]));



   /* Use the function fromPairs to create an object containing key value pairs. For
    example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter
    Island"],[“fantasy”,”Pans Labyrinth"]*/
  console.log("\n BY USE THE FUNCTION FROMPAIRS TO CREATE AN OBJECT CONTAINING KEY VALUE PAIRS")

    console.log(_.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","ShutterIsland"],["fantasy","Pans Labyrinth"]]));






});


module.exports = router;
// adding this comment for no reason
