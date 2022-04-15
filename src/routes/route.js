const express = require('express');
const router = express.Router();
const BookModel = require("../models/Bookmodel")
const Bookcontroller = require("../controller/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post('/createBook',Bookcontroller.createBook)
router.get('/getBooklist',Bookcontroller.FindBook)











module.exports = router;