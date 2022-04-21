const { is } = require("express/lib/request")
const UserModel = require("../models/userModel")
const productmodel = require("../models/Productmodel")


const isFreeAppUserInHeader = function (req, res, next) {

    let header = req.headers["isfreeappuser"]
    if (!header) {
        res.send({ msg: "the request is missing a mandatory header" })
    } else {
        next()
    }

}




const validateUserId = async function (req, res, next) {
    let data = req.body
    if (!data.user_id) {
        res.send({ msg: " userId is not present" })
    }
    let userIdValue = await UserModel.findOne({ _id:data.user_id })
    if (userIdValue !== null) {
        let c = userIdValue._id.toString()
        if (data.user_id == c) {
            next()
        }
    }
    else {
        res.send({ msg: "userId is not match" })
    }

}

//=====>
const validateProductId = async function (req, res, next) {
    data = req.body
    if (!data.product_id) {
        res.send({ msg: " productId is not present" })
    }
    let productIdValue = await productmodel.findOne({ _id: data.product_id})
    if (productIdValue !== null) {
        let c = productIdValue._id.toString()
        if (data.product_id == c) {
            next()
        }
    }
    else {
        res.send({ msg: "productId is not match" })
    }

}


module.exports.isFreeAppUserInHeader = isFreeAppUserInHeader
module.exports.validateUserId = validateUserId
module.exports.validateProductId = validateProductId