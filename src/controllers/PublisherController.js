const publisherModel = require("../models/publisherModel")
//const PublisherModel = require("../models/publisherModel")

const publisherCreated = async function (req, res) {
    let Publisher = req.body
    let publisherCreated = await publisherModel.create(Publisher)
    res.send({data: publisherCreated})
}



module.exports.publisherCreated= publisherCreated

//module.exports.getAuthorsData= getAuthorsData