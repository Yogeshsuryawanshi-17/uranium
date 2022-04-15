const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controller/usercontroller.js")
const BookModel = require("../models/Bookmodel.js")
const Bookcontroller = require("../controller/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createuser', UserController.createuserData)
router.get('/getuserdata', UserController.findUser)

router.post('/createBook',Bookcontroller.createBook)
router.get('/getBooklist',Bookcontroller.FindBook)











module.exports = router;