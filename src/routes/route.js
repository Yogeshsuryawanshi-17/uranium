const express = require('express');
const logger = require('./logger')

const router = express.Router();

const array = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']



router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})


// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });

// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies',function(req,res){ 

  res.send(array)

});

// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api
// Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.


router.get('/movies/:indexNumber',function(req,res){


     const index = req.params.indexNumber
    
     if(index < array.length)
      {
        res.send(array[index])
       
      }
      else{ 
        res.send("ERROR::::enter a valind index ")
         
      }
      
});
    // for(let i=0;i<array.length;i++)
    //  {
    //    if(index == i){
    //      arr = array[index]
    //    }
    //  }

    //  res.send(arr)


//problem 4

let arrayOfobj = [{
  id: 1,
  name: 'The Shining'
 }, {
  id: 2,
  name: 'Incendies'
 }, {
  id: 3,
  name: 'Rang de Basanti'
 }, {
  id: 4,
  name: 'Finding Nemo'
 }]
 

router.get('/films',function(req,res){

  res.send(arrayOfobj)

});


      
  
//Write api GET /films/:filmId where filmId is the value received in request path params

router.get('/films/:filmId',function(req,res){


    if(req.params.filmId < arrayOfobj.length){
      res.send(arrayOfobj[req.params.filmId])
    }
    else{
      res.send("ERORR:::No movie exists with this id")
    }

});

//finding an missing number from array 

router.get('/missingnumber',function(req,res){


  // res.send("This is missing number API")

  const arr = [1,2,3,4,5,7,8,9]
   
  let n = arr.length;
  let sum = 0;
  let nanture = (n+1)*(n+2)/2;

  for(let i=0;i<arr.length;i++)
   {     
        sum +=arr[i];
  }
    
 MISNUM = nanture - sum
//console.log(MISNUM);

res.send("Missing Number : "+ (MISNUM).toString());

});

router.get('/missingrandom',function(req,res){

     const arr = [33,34,35,37,38,39]
});


router.post("/postAPI",function(req,res)
{
      res.send({msg :" Hii"})   
      let i = req.body 
      console.log(i)

});




module.exports = router;
// adding this comment for no reason

