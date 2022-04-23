
const jwt = require('jsonwebtoken')


const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    try {
        let token = req.headers['x-Auth-token']
        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(404).send({ status: false, msg: "token must be presnet " })

        let decodedToken = jwt.verify(token, "functionup-thorium");

        if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" })

        next()
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }

}


const authorise = function (req, res, next) {

    // comapre the logged in user's id and the id in request
    try {
        let token = req.headers['x-Auth-token']
        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ status: false, msg: "token must be presnet " })

        let decodedToken = jwt.verify(token, "functionup-thorium");

        if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" })


        let userToBeModified = req.params.userId
        let userLoggedIn = decodedToken.userId

        if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

        next()
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }

}


module.exports.authenticate = authenticate
module.exports.authorise = authorise
