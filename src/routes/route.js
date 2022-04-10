const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send({ msg: "My first ever API response in JSON !!" })
});



router.get('/test-api1', function (req, res) {

    res.send("hi FunctionUp ")
});


router.get('/test-api2', function (req, res) {

    res.send({ msg: "Hi FUnctionUp..again !" })
});


router.get('/test-api3', function (req, res) {

    res.send({ msg: "Hi FUnctionUp..again..this is another similar api !" })
});


router.get('/test-api4', function (req, res) {

    res.send({ msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!" })
});


router.get('/test-api5', function (req, res) {

    res.send({ msg: "Hi FUnctionUp", name: "FunctionUp", age: "100" })
});



router.get('/test-api6', function (req, res) {

    res.send({ data: [12, 24, 36, 48, 60] })
});

router.post('/test-post1', function (req, res) {

    res.send({ msg: "hi guys" })
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data = req.body
    console.log(data)
    res.send({ msg: "hi guys..my 2nd post req" })
});


const randomController = require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray)//HANDLER/CONTROLLER








/*  
Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data
*/


//const playersrcord = require('../controllers/playersArray')


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]





router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE

    //   const arr = [
    //     {
    //         "name": "mangesh",
    //         "dob": "17/02/1998",
    //         "gender": "male",
    //         "city": "Pune  ",
    //         "sports": [
    //             "Gymming"
    //         ]
    //     }

    // ]


    let x = req.body
    if (req.body.name != undefined && req.body.dob!==undefined && req.body.gender!==undefined && req.body.city!==undefined &&req.body.sports!==undefined) {


        for (let i = 0; i < players.length; i++) {
            if (players[i].name === req.body.name) {
                res.send("The player already exists")

            }
        }



        players.push(x)
        res.send(players)

    }

    else {
        res.send("Enter Vaild Details");
    }







    //let data = req.body
    // players.push(data)
    //  res.send({data:players,status:true})
    // players.push(req.body.Data)
    /// res.send(" data of a player with a name that already exists in the data")
});









module.exports = router