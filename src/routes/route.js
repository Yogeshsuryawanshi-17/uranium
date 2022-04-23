const express = require('express');
const router = express.Router();

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



//USER API  Call
const userController = require("../controllers/userController")
const middlewarrecontroller = require("../middleware/auth")


router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId",  middlewarrecontroller.authenticate ,userController.getUserData)
router.post("/users/:userId/posts", middlewarrecontroller.authorise,userController.postMessage)
router.put("/users/:userId", middlewarrecontroller.authenticate,userController.updateUser)


module.exports = router;