const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controller/usercontroller.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post('/createuser', UserController.createuserData)
router.get('/getuserdata', UserController.findUser)










module.exports = router;