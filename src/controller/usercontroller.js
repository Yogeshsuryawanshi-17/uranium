const UserModel = require("../models/userModel")


const createuserData = async function (req, res) {

    let data = req.body
    let saveDate = await UserModel.create(data)
    res.send(data)
}

module.exports.createuserData = createuserData

let findUser = async function (req, res) {

    let saveDate = await UserModel.find()
    res.send(saveDate)

}

module.exports.findUser = findUser